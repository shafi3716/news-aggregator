/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card';
import Filter from '../../components/Filter';
import { get } from '../../services/apiService';
import { saveArticles } from '../../store/newsDataSlice';
import { RootState } from '../../store/store';
import './home.scss';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const newsData = useSelector((state: RootState) => state.newsDataSlice);
  const [filterOpen, setFilterOpen] = useState<boolean>(true);
  const [renderData, setRenderData] = useState<boolean>(false);

  useEffect(() => {
    const getNewsData = async () => {
      const url = `/everything?q=${newsData.search.q}&sortBy=${newsData.search.sortBy}&apiKey=${process.env.REACT_APP_API_KEY}&page=${newsData.search.page}&pageSize=${newsData.search.pageSize}${newsData.search.domains ? '&domains=' + newsData.search.domains : '' }`
      + `${newsData.search.form ? '&form=' + newsData.search.form : '' }${newsData.search.to ? '&to=' + newsData.search.to : '' }`
      
      await get(url).then(apiResponse => {
        dispatch(saveArticles(apiResponse));
        setRenderData(false)
      }).catch(error => {
      if (error) {
        if (error.response?.status === 400) {
          console.error('Bad Request:', error.response.data);
        } else {
          console.error('Error:', error.response?.status, error.response?.data);
        }
      } else {
        console.error('Unexpected Error:', error);
      }
    });

    }
    getNewsData();
  }, [renderData])

  return (
    <div className='container'>
      {/* result count and filter button */}
      <div className='result-filter'>
        <div className='total-result'>
          <span>Total:</span> {newsData?.totalResults}
        </div>
        <div>
          <button className='filter-btn' onClick={() => setFilterOpen(!filterOpen)}>Filter {filterOpen ? "Close" : "Open"}</button>
        </div>
      </div>
      {/* News filter functionality */}
      <Filter isShow={filterOpen} handleApplyFilter={() => setRenderData(true)}/>
      {/* News cards */}
      <div className='card-container'>
        {
          newsData?.articles && newsData?.articles.length > 0 &&
          newsData?.articles?.map((article: any, index: number) => (
            <div key={index} className='card'>            
              <Card article={article}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home

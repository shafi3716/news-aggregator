/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import Filter from '../../components/Filter';
import { get } from '../../services/apiService';
import { saveArticles } from '../../store/newsDataSlice';
import { RootState } from '../../store/store';
import './home.scss';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const newsData = useSelector((state: RootState) => state.newsDataSlice);
  const [filterOpen, setFilterOpen] = useState<boolean>(true);

  useEffect(() => {
    const getNewsData = async () => {
      const url = `/everything?q=${newsData.search.q}&sortBy=${newsData.search.sortBy}&apiKey=${process.env.REACT_APP_API_KEY}&page=${newsData.search.page}&pageSize=${newsData.search.pageSize}`
      const apiResponse = await get(url);
      dispatch(saveArticles(apiResponse));
    }
    getNewsData();
  }, [])

  return (
    <div className='container'>
      {/* result count and filter button */}
      <div className='result-filter'>
        <div className='total-result'>
          <span>Total:</span> {newsData?.totalResults}
        </div>
        <div>
          <button className='filter-btn' onClick={() => setFilterOpen(!filterOpen)}>Filter</button>
        </div>
      </div>
      {/* News filter functionality */}
      <Filter isShow={filterOpen}/>
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

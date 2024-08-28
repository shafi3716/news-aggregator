import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import Filter from '../../components/Filter';
import { get } from '../../services/apiService';
import { ArticlesProps } from '../../type/Type';
import './home.scss';

const Home: React.FC = () => {

  const [newsData , setNewsData] = useState<ArticlesProps>();
  const [filterOpen, setFilterOpen] = useState<boolean>(true);

  useEffect(() => {
    const getNewsData = async () => {
      const url = '/everything?q=tesla&sortBy=publishedAt&apiKey=' + process.env.REACT_APP_API_KEY + '&page=' + 1 + '&pageSize=' + 20
      const apiResponse = await get(url);
      setNewsData(apiResponse);
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

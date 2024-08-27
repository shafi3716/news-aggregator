import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { get } from '../../services/apiService';
import { ArticlesProps } from '../../type/Type';
import './home.scss';

const Home: React.FC = () => {

  const [newsData , setNewsData] = useState<ArticlesProps>();

  useEffect(() => {
    const getNewsData = async () => {
      const url = '/everything?q=tesla&from=2024-07-27&sortBy=publishedAt&apiKey=' + process.env.REACT_APP_API_KEY
      const apiResponse = await get(url);
      setNewsData(apiResponse);
    }
    getNewsData();
  }, [])

  return (
    <div>
      <div>Filter</div>
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

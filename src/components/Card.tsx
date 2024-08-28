import React from 'react';
import { HelperUtils } from '../helpers/HelperUtil';
import { ArticleProps } from '../type/Type';

interface ArticleDetail {
    article: ArticleProps
}

const Card: React.FC<ArticleDetail> = ({article}) => {
  return (
        <>
            <div>
                {
                    <img src={article?.urlToImage ?? "/images/default-image.png"} alt={article?.title} className='card-img'  
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.src  = "/images/default-image.png"; }}/>
                }
            </div>
            <div className='card-title'>
                {article?.title}
            </div>
            <div className='card-desc'>
                {article?.description }
            </div>
            <div className='pub-author'>
                <div><span className='c-h-1'>Published: </span> {HelperUtils.countdown(article?.publishedAt)}</div>
                <div><span className='c-h-1'>Author: </span> {article?.author ?? "-"}</div>
            </div>
        </>
  )
}

export default Card

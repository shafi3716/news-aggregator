import React from 'react'
import './Filter.scss'

interface filterProps{
    isShow: boolean
}

const Filter: React.FC<filterProps> = ({isShow}) => {
  return (
   <>
    {
        isShow &&
        <div className='filter-section'>
            <div className='input'>
                <label>News Title</label>
                <input name="news-title" />
            </div>
            <div className='input'>
                <label>Source</label>
                <input name="source" />
            </div> 
            <div className='input'>
                <label>Category</label>
                <input name="category" />
            </div>  
            <div className='input'>
                <label>Start Date</label>
                <input name="startDate" />
            </div>
            <div className='input'>
                <label>End Date</label>
                <input name="endDate" />
            </div> 
            <div className='input'>
                <button>Apply</button>
                <button>Clear</button>
            </div>
        </div>
    }
   </>
  )
}

export default Filter

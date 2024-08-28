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
                <input className="field" name="news-title" type='text'/>
            </div>
            <div className='input'>
                <label>Source</label>
                <input className="field" name="source" type='text'/>
            </div> 
            <div className='input'>
                <label>Category</label>
                <select className="field" name="category">
                    <option>One</option>
                    <option>two</option>
                    <option>three</option>
                </select>
            </div>  
            <div className='input'>
                <label>Start Date</label>
                <input className="field" name="startDate" type='date'/>
            </div>
            <div className='input'>
                <label>End Date</label>
                <input className="field" name="endDate" type='date'/>
            </div> 
            <div className='input'>
                <button className='button success'>Apply</button>
                <button className='button warm'>Clear</button>
            </div>
        </div>
    }
   </>
  )
}

export default Filter

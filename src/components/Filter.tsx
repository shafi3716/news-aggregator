import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchField } from '../store/newsDataSlice';
import { RootState } from '../store/store';
import { Search } from '../type/Type';
import './Filter.scss';

interface filterProps{
    isShow: boolean,
    handleApplyFilter: () => void
}

const Filter: React.FC<filterProps> = ({isShow, handleApplyFilter}) => {

  const dispatch = useDispatch();
  const newsData = useSelector((state: RootState) => state.newsDataSlice);
  const [formSearch, setFormSearch] = useState<Search>({
        q: newsData.search.q,
        domains: newsData.search.domains,
        sortBy: newsData.search.sortBy,
        form: newsData.search.form,
        to: newsData.search.to,
        page: newsData.search.page,
        pageSize: newsData.search.pageSize,
    });
    const domains = ["bbc.co.uk", "techcrunch.com", "engadget.com"];
    const sortBy = ["relevancy", "popularity", "publishedAt"];

    const handleInput = (name: string, value: string): void => {
       setFormSearch(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    
    const handleSubmit = (): void => {
      dispatch(updateSearchField(formSearch))
      handleApplyFilter();
    }

    const handleClear = (): void => {
        const formData = {
            q: "tesla",
            domains: "",
            sortBy: "publishedAt",
            form: "",
            to: "",
            page: 1,
            pageSize: 20,
        }
      setFormSearch(formData)
      dispatch(updateSearchField(formData))
      handleApplyFilter();
    }

  return (
   <>
    {
        isShow &&
        <div className='filter-section'>
            <div className='input'>
                <label>News Title</label>
                <input className="field" name="q" type='text' value={formSearch?.q} 
                onChange={(e) => handleInput(e.target.name, e.target.value)}/>
            </div>
            <div className='input'>
                <label>Domain</label>
                <select className="field" name="domains" value={formSearch.domains}
                    onChange={(e) => handleInput(e.target.name, e.target.value)}>
                    <option value="">Select</option>
                    {
                        domains.map((item) => (
                            <option key={item} value={item}>{item}</option>
                        ))
                    }
                </select>
            </div>  
            <div className='input'>
                <label>SortBy</label>
                <select className="field" name="sortBy" value={formSearch.sortBy}
                onChange={(e) => handleInput(e.target.name, e.target.value)}>
                    <option value="">Select</option>
                    {
                        sortBy.map((item) => (
                            <option key={item} value={item}>{item}</option>
                        ))
                    }
                </select>
            </div>  
            <div className='input'>
                <label>Start Date</label>
                <input className="field" name="form" type='date' value={formSearch.form} 
                onChange={(e) => handleInput(e.target.name, e.target.value)}/>
            </div>
            <div className='input'>
                <label>End Date</label>
                <input className="field" name="to" type='date' value={formSearch.to} 
                onChange={(e) => handleInput(e.target.name, e.target.value)}/>
            </div>  
            <div className='btn-group'>
                <button className='button success' onClick={() => handleSubmit()}>Apply</button>
                <button className='button warm' onClick={() => handleClear()}>Clear</button>
            </div>
        </div>
    }
   </>
  )
}

export default Filter
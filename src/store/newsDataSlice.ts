import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArticleProps, ArticlesProps, Search } from "../type/Type";

export interface NewsDataState {
  totalResults: number
  articles: ArticleProps[]
  search: Search
}

const initialState: NewsDataState = {
  totalResults: 0,
  articles: [],
  search: {
    q: "tesla",
    domains: "",
    sortBy: "publishedAt",
    form: "",
    to: "",
    page: 1,
    pageSize: 20,
  }
}

export const newsDataSlice = createSlice({
    name: 'newsData',
    initialState,
    reducers: {
        saveArticles: (state, action: PayloadAction<ArticlesProps>) => {
            state.totalResults = action.payload.totalResults;
            state.articles = action.payload.articles; 
        },
        updateSearchField: (state, action: PayloadAction<Search>) => {
          state.search = action.payload
        }
    }
})

export const { saveArticles, updateSearchField } = newsDataSlice.actions
export default newsDataSlice.reducer
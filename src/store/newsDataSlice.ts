import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArticleProps, ArticlesProps, search } from "../type/Type";

export interface NewsDataState {
  totalResults: number
  articles: ArticleProps[]
  search: search
}

const initialState: NewsDataState = {
  totalResults: 0,
  articles: [],
  search: {
    q: "tesla",
    sortBy: "publishedAt",
    page: 1,
    pageSize: 22,
  }
}

export const newsDataSlice = createSlice({
    name: 'newsData',
    initialState,
    reducers: {
        saveArticles: (state, action: PayloadAction<ArticlesProps>) => {
            state.totalResults = action.payload.totalResults;
            state.articles = action.payload.articles; 
        }
    }
})

export const { saveArticles } = newsDataSlice.actions
export default newsDataSlice.reducer
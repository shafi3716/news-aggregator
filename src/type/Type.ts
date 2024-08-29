export interface ArticleProps {
    author: string,
    content: string,
    description: string,
    publishedAt: string,
    source: {
        id: number | null,
        name: string
    }
    title: string,
    url: string,
    urlToImage: string,
} 

export interface ArticlesProps {
    articles: ArticleProps[],
    status: string,
    totalResults: number
}

export interface Search{
    q: string,
    domains: string,
    sortBy: string,
    form: string,
    to: string,
    page: number,
    pageSize: number,
  }
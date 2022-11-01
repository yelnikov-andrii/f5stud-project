import React from 'react';
import { Articles } from "../Articles/Articles";
import { Title } from "../UI/Title";
import { ArticlesMore } from "../ArticlesMore/ArticlesMore";
import { articles } from "../../data/data";
import { Article as ArticleType } from '../../types/types';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Article } from '../Article/Article';

export const News = () => {
  const [selectedArticle, setSelectedArticle] = React.useState<ArticleType>(articles[0]);
  const tabs = articles.filter(article => article.img !== selectedArticle.img).slice(0, 4);
  const articlesMore = articles.filter((article => article.img !== selectedArticle.img && 
    tabs.every((tab => tab.img !== article.img))));

    React.useEffect(()=>{
      window.scroll({
        top: 250,
        left: 0,
        behavior: "smooth"
      })
    }, [selectedArticle]);

  return (
    <Routes>
    <Route path='/news' element={
      <section className="news">
      <div className="container">
      <Title title="news" img="forNews" className="news__title"/>
      </div>
      <Articles
        selectedArticle={selectedArticle}
        setSelectedArticle={setSelectedArticle}
        tabs={tabs}
      />
      <ArticlesMore 
        articles={articlesMore}
        selectTab={setSelectedArticle}
      />
    </section>
    }>
    </Route>
    <Route 
      path='/' 
      element={<Navigate replace to='/news'/>}>
    </Route>
    <Route path='/news/:id' element={
      <Article 
        articles={articles} 
        selectTab={setSelectedArticle}
      />}>
    </Route>
  </Routes>
  )
}
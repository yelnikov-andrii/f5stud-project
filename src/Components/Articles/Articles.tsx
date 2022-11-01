import React, {Dispatch, SetStateAction} from 'react';
import { Article } from '../../types/types';
import { ArticleSelected } from '../ArticleSelected/ArticleSelected';
import { ArticleTabs } from '../ArticleTabs/ArticleTabs';

type Props = {
  selectedArticle: Article;
  setSelectedArticle: Dispatch<SetStateAction<Article>>;
  tabs: Article[];
}

export const Articles: React.FC <Props> = ({selectedArticle, setSelectedArticle, tabs}) => {
  return (
    <div className="news__articles">
      <div className='container'>
        <ArticleSelected 
          selectedArticle={selectedArticle}
          className="news__articleSelected"
        />
        <ArticleTabs 
          tabs={tabs} 
          selectTab={setSelectedArticle}
          className="news__articleTabs"
        />
      </div>
    </div>
  )
}
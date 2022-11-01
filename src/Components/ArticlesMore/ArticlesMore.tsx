import React, {Dispatch, SetStateAction} from 'react';
import { Article } from '../../types/types';
import { ArticleTabs } from '../ArticleTabs/ArticleTabs';

type Props = {
  articles: Article[];
  selectTab: Dispatch<SetStateAction<Article>>;
}

export const ArticlesMore: React.FC <Props> = ({articles, selectTab}) => {
  return (
    <div className="articlesMore">
      <div className="container">
      <p className="articlesMore__title">
        Read more
      </p>
      </div>
      <div className="articlesMore__items">
        <div className="container">
          <ArticleTabs 
            tabs={articles}
            selectTab={selectTab}
            className="articlesMore__articleTabs"
          />
        </div>
      </div>
    </div>
  )
}
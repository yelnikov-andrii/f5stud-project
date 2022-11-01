import React, {Dispatch, SetStateAction} from 'react';
import { Article } from '../../types/types';
import { ArticleTab } from '../ArticleTab/ArticleTab';

type Props = {
  tabs: Article[];
  selectTab: Dispatch<SetStateAction<Article>>;
  className: string;
}

export const ArticleTabs: React.FC <Props> = ({tabs, selectTab, className}) => {
  return (
    <div className={`articletabs ${className}`}>
      {tabs.map(tab => (
        <ArticleTab 
          tab={tab} 
          selectTab={selectTab}
          key={tab.id} 
        />
      ))}
    </div>
  )
}
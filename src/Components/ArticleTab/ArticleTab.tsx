import React from 'react'
import { Article } from '../../types/types'

type Props = {
  tab: Article;
  selectTab: (arg0: Article) => void;
}

export const ArticleTab: React.FC <Props> = ({tab, selectTab}) => {
  return (
    <div 
      className='articletabs__tab'
      key={tab.img}
      onClick={() => {
        selectTab(tab)
      }}
    >
      <img 
        className='articletabs__img'
        src={tab.img} 
        alt=""
      />
      <div className='articletabs__element'>
      </div>
      <b className='articletabs__title'>
        {tab.title}
      </b>
    </div>
  )
}
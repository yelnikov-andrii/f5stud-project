import React from 'react';
import { Article } from '../../types/types';
import { Link } from 'react-router-dom';

type Props = {
selectedArticle: Article;
className: string;
}

export const ArticleSelected: React.FC <Props> = ({selectedArticle, className}) => {
  const brieftxt = selectedArticle.txt.slice(0, 190);
  return (
    <div className={`news__articleSelected ${className}`}>
      <img 
        src={selectedArticle.img} 
        alt=""
        className='articleSelected__img'
      />
      <div className='articleSelected__description'>
        <p className='articleSelected__date'>
          {selectedArticle.date}
        </p>
        <b className='articleSelected__title'>
          {selectedArticle.title}
        </b>
        <p className='articleSelected__txt'>
          {brieftxt + '....'}
        </p>
        <Link 
          to={selectedArticle.id.toString()}
          className="link"
        >
          Read article
        </Link>
      </div>
    </div>
  )
}
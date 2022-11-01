import React, {Dispatch, SetStateAction} from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Article as ArticleType } from '../../types/types';
import { ArticlesMore } from '../ArticlesMore/ArticlesMore';
import iconInst from '../../images/iconInstagram.png';
import iconLn from '../../images/iconLinkedin.png';
import { LinkedinShareButton } from 'react-share';

type Props = {
  articles: ArticleType[];
  selectTab: Dispatch<SetStateAction<ArticleType>>;
}

export const Article: React.FC <Props> = ({articles, selectTab}) => {
  const params = useParams();
  const navigate = useNavigate();
    const article = articles.find((article => params.id ? article.id === +params.id : null));
    const articlesMore = articles.filter((article => params.id ? article.id !== +params.id : null));

    React.useEffect(()=> {
      window.scroll({
        top: 50,
        left: 0,
        behavior: "smooth"
      })
    }, [article]);
  
  return (
    <>
      <article className='article'>
      <div className="container">
        <div className='article__block'>
          <button
            className='article__back' 
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </button>
          <div className='article__blockImage'>
            <img 
              src={article?.img}
              className="article__img"
              alt=""
            />
            <b className='article__title'>
              {article?.title}
            </b>
            <p className='article__date'>
              {article?.date}
            </p>
          </div>
            <p className='article__txt'>
              {article?.txt}
            </p>
        </div>
        <div className="article__links">
          <Link to={params.id && +params.id !== articles.length ? `../news/${+params.id + 1}` : `../news/1`} className="link">
            Next article
          </Link>
          <div className='article__socialmedia'>
            <p className='article__shareTo'>
              Share to:
            </p>
            <a
              className='article__icon' 
              href='/'
            >
              <img src={iconInst} alt=""/>
            </a>

            <LinkedinShareButton
              title={article?.title}
              summary={article?.txt}
              source={`news/${article?.id}`}
              className="article__icon"
              url='news'
              >
               <img src={iconLn} alt="" />
              </LinkedinShareButton>

          </div>
        </div>
      </div>
      </article>
    <ArticlesMore 
      articles={articlesMore} 
      selectTab={selectTab} 
    />
    </>
  )
}
import {useEffect, useState } from 'react';
import Post from './Post';
import Loader from './UI/Loader';
import { getHeadlineArticles } from '../API/headlineArticlesAPI';
import '../styles/Headline.css';
import config from '../config.json';


export default function Headline() {
  const [isLoading, setIsLoading] = useState();

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);      
      const response = await getHeadlineArticles({
        pageSize: config.HEADLINE_ARTICLE_COUNT,
      });
      setPosts(response.data.articles);
      setIsLoading(false);
    }

    fetchData();
  }, []);
  
  return (
    <div className='container'>
      {isLoading ? <Loader /> :
      <div className='Headline-conteiner'>
        <div className='mainNews'>
          <Post {...posts[0]} />
        </div>

        <div className='Headline-news-box'>
            {posts.map((el, index) => {
              if(index !== 0) {
                return <Post {...el} key={index}/>;
              }
            })}
        </div>
      </div>}
    </div>
  );
};

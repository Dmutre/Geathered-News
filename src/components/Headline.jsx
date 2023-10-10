import {useEffect, useState } from 'react';
import Post from './Post';
import Loader from './UI/Loader';
import { getHeadlineArticles } from '../API/headlineArticlesAPI';
import '../styles/Headline.css';


export default function Headline() {
  const [isLoading, setIsLoading] = useState();

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      await new Promise(res => setTimeout(res, 2000));
      
      const response = await getHeadlineArticles({
        pageSize: 5,
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
          <div>
            <Post {...posts[1]}/>
          </div>
          <div>
            <Post {...posts[2]}/>
          </div>
          <div>
            <Post {...posts[3]}/>
          </div>
          <div>
            <Post {...posts[4]}/>
          </div>
        </div>
      </div>}
    </div>
  )
}

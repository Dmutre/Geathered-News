import {useEffect, useState } from 'react';
import Post from './Post';
import { getHeadlineArticles } from '../API/headlineArticlesAPI';
import '../styles/Headline.css';


export default function Headline() {
  const [isLoading, setIsLoading] = useState();

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      const response = await getHeadlineArticles({
        pageSize: 5,
      });
      setPosts(response.data.articles);
    }

    fetchData();
    setIsLoading(false);
  }, []);
  
  return (
    <div className='container'>
      {isLoading ? <h1>Data is loading</h1> :
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

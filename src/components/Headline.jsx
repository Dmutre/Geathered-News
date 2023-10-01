import {useEffect, useState } from 'react';
import Post from './Post';
import axios from 'axios';
import { getHeadlineArticles } from '../API/headlineArticlesAPI';
import '../styles/Posts.css';


export default function Headline() {
  const [isLoading, setIsLoading] = useState();

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setIsLoading(true);

    getHeadlineArticles(setPosts, {
      pageSize: 5
    });

    setIsLoading(false);
  }, []);
  
  return (
    <div className='container'>
      {isLoading ? <h1>Data is loading</h1> :
      posts.map((el, index) => <Post {...el} key={index}/>)}
    </div>
  )
}

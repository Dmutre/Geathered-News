import {useEffect, useState } from 'react';
import Post from './Post';
import axios from 'axios';
import '../styles/Posts.css';


export default function Posts() {
  const [isLoading, setIsLoading] = useState();

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    axios.get(`https://newsapi.org/v2/everything?q=apple`,{
      params: {
        sortBy: "date",
        from: "2023-09-24",
        to: "2023-09-24",
        apiKey: "ebb4b54dfe3d4dd69f5932b55a1bd772"
      }
    })
    .then(res => {
      console.log(res);
      setIsLoading(false);
      setPosts(res.data.articles);
    });
  
  }, []);
  
  return (
    <div className='container'>
      {isLoading ? <h1>Data is loading</h1> :
      posts.map((el, index) => <Post {...el} key={index}/>)}
    </div>
  )
}

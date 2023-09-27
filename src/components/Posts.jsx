import {useEffect, useState } from 'react';
import Post from './Post';
import axios from 'axios';


export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://newsapi.org/v2/everything?q=apple&from=2023-09-26&to=2023-09-27&sortBy=date&apiKey=ebb4b54dfe3d4dd69f5932b55a1bd772')
    .then(res => {
      console.log(res);
      setPosts(res.data.articles);
    });
  
  }, []);
  
  return (
    <div>
      {posts.map((el, index) => <Post {...el} key={index}/>)}
    </div>
  )
}

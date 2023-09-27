import React from 'react';
import '../styles/Post.css';

export default function Post({author, content, description, publishedAt, title, url, urlToImage}) {
  return (
    <div className='article' style={{backgroundImage: `url(${urlToImage})`}}>
      <h1>{title}</h1>
    </div>
  )
}

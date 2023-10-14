import React from 'react';
import '../styles/Post.css';

export default function Post({author, content, description, publishedAt, title, url, urlToImage}) {
  const ArcTitle = (title && title.length > 20) ? title.split('').splice(0, 20).join('') + '...' : title;

  return (
    <div className='article' style={{backgroundImage: `url(${urlToImage})`}}>
      <h1 className='article-title'>{ArcTitle}</h1>
    </div>
  );
};

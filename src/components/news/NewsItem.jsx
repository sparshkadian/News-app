import React from 'react';
import { useContext } from 'react';
import NewsContext from '../../context/news/NewsContext';

function NewsItem({
  news: { title, creator, link, image_url, description, pubDate, country },
}) {
  // const { nextPageFunction } = useContext(NewsContext);

  return (
    <div className='news-container'>
      <p>Title: {title}</p>
      {/* <img src={image_url} alt='' /> */}
      <p>Published on: {pubDate}</p>
      <p>Author: {creator}</p>
      <p>Description: {description}</p>
      <p>Published in: {country}</p>
      <a href={link} target='_blank'>
        Read More
      </a>
      <button className='btn btn-ghost'>Next Page</button>
    </div>
  );
}

export default NewsItem;

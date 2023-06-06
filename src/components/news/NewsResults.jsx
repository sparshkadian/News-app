import { useContext } from 'react';
import NewsContext from '../../context/news/NewsContext';
import NewsItem from './NewsItem';
import { v4 as uuidv4 } from 'uuid';
import Spinner from '../assests/Spinner';

function NewsResults() {
  const { News, loading } = useContext(NewsContext);

  if (!loading) {
    return (
      <div>
        {News.map((news) => (
          <NewsItem key={uuidv4()} news={news} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default NewsResults;

import { createContext, useReducer } from 'react';
import NewsReducer from './NewsReducer';

const NewsContext = createContext();

const NEWS_API = process.env.REACT_APP_NEWS_API;
// const API_KEY = process.env.REACT_APP_API_KEY;

export const NewsProvider = ({ children }) => {
  const initialValues = {
    topic: '',
    news: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(NewsReducer, initialValues);

  // Function to fetch news by Topic
  const fetchNews = async (topic) => {
    const setTopic = topic;
    dispatch({ type: 'SET_TOPIC', payload: setTopic });
    setLoading();
    const repsonse = await fetch(
      `https://newsdata.io/api/1/news?apikey=pub_21949d326e5ae0cfacb9b5f8e5cdbab096262&q=${topic}&language=en`
    );
    const { results } = await repsonse.json();
    dispatch({ type: 'SET_NEWS', payload: results, topic });
  };

  // Function to go to next Page
  // const nextPageFunction = async (pageId) => {
  //   setLoading();
  //   const repsonse = await fetch(
  //     `https://newsdata.io/api/1/news?apikey=pub_21949d326e5ae0cfacb9b5f8e5cdbab096262&q=python&language=en&page=${pageId}`
  //   );
  //   const { results } = await repsonse.json();
  //   dispatch({ type: 'SET_NEWS', payload: results });
  // };

  // Function to set Loading Spinner
  const setLoading = () => {
    dispatch({ type: 'SET_LOADING' });
  };

  return (
    <NewsContext.Provider
      value={{
        News: state.news,
        loading: state.loading,
        fetchNews,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;

import { useState, useContext } from 'react';
import { FaSearch } from 'react-icons/fa';
import NewsContext from '../../context/news/NewsContext';
import { Link } from 'react-router-dom';

function NewsSearch() {
  const { fetchNews } = useContext(NewsContext);
  const [topic, setTopic] = useState('');
  //   const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setTopic(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (topic === '') {
      alert('Pls Enter a Topic');
    } else {
      fetchNews(topic.trim());
      setTopic('');
    }
  };

  return (
    <div className='ml-10 grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                className='w-full pr-40 bg-gray-200 input input-lg text-black'
                placeholder='Search News by Topic'
                onChange={handleChange}
                value={topic}
              />
              <button
                type='submit'
                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
              >
                <FaSearch />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewsSearch;

import NewsSearch from '../components/news/NewsSearch';
import NewsResults from '../components/news/NewsResults';

function Home() {
  return (
    <div className='p-3'>
      <NewsSearch />
      <NewsResults />
    </div>
  );
}

export default Home;

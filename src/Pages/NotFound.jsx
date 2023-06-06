import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='hero notfound'>
      <div className='hero-content text-center'>
        <div className='grid gap-10 '>
          <p className='text-white text-8xl font-bold text-gray-500'>Oops!</p>
          <p className='text-white text-5xl font-bold text-gray-500'>
            404 - Page Not Found
          </p>
          <Link to='/'>
            <button className='btn btn-lg btn-primary '>
              <FaHome />
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;

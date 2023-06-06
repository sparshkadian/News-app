import { FaNewspaper } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='flex justify-between p-3 pl-5 bg-base-200'>
      <div className='flex  demo w-32 justify-between align items-center'>
        <FaNewspaper size={'25px'} />
        <Link to='/'>
          <p className='text-xl font-bold cursor-pointer'>News App</p>
        </Link>
      </div>
      <div className='grid grid-cols-2 gap-4'>
        <Link to='/'>
          <button className='btn btn-ghost'>Home</button>
        </Link>
        <Link to='/about'>
          <button className='btn btn-ghost'>About</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

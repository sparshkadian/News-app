import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/assests/Navbar';
import Footer from './components/assests/Footer';
import NotFound from './Pages/NotFound';
import Home from './Pages/Home';
import About from './Pages/About';
import { NewsProvider } from './context/news/NewsContext';
import NewsResults from './components/news/NewsResults';

function App() {
  return (
    <NewsProvider>
      <BrowserRouter>
        <div className='flex flex-col h-screen justify-between'>
          <Navbar />
          <main className='container mx-auto px-3 pb-12'>
            <Routes>
              <Route exact path='/' element={<Home />} />
              {/* <Route path='/result' element={<NewsResults />} /> */}
              <Route path='/*' element={<NotFound />} />
              <Route path='/about' element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </NewsProvider>
  );
}

export default App;

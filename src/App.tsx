import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Home from './pages/home/Home';
import { Routes, Route } from 'react-router-dom';
import Services from './pages/services/Services';
import Footer from './core/footer/Footer';
import Contact from './pages/contactc/Contact';
import ScrollToHash from './hooks/scrollToHash';
import Nav from './shared/components/nav/Nav';
import Inmersive from './pages/inmersive/Inmersive';
import InteractiveLanding from './pages/gaussian/InteractiveLanding';

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      // Le damos tiempo al fadeOut
      setTimeout(() => setLoaded(true), 200);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  });

  return (
    <>
      <div id="preloder" className={`preloader ${loaded ? 'fade-out' : ''}`}>
        <div className="loader" />
      </div>
      <ScrollToHash />
      <ScrollToHash />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/inmersive" element={<Inmersive />} />
        <Route path="/studio" element={<InteractiveLanding />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

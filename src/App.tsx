import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import Home from './pages/home/Home';
import { Routes, Route } from 'react-router-dom';
import Services from './pages/services/Services';
import Footer from './core/footer/Footer';
import { Nav } from './shared/components/nav/Nav';
import Contact from './pages/contactc/Contact';
import TresDBuilding from './shared/components/3d-building/3d-building';

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
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/edificio" element={<TresDBuilding />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App

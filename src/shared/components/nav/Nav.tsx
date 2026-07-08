import React, { useEffect, useState } from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';

export const Nav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 700) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleMenu() {
    setMenuOpen((prev) => !prev);
  }

  const handleOverlayClick = () => {
    console.log('click');
    setMenuOpen(false);
  };

  return (
    <>
      <div
        className={`offcanvas-menu-overlay ${menuOpen ? 'active' : ''}`}
        onClick={handleOverlayClick}
      ></div>
      <div className={`header offcanvas-menu-wrapper ${menuOpen ? 'active' : ''}`}>
        <div className="offcanvas__logo">EF FILMS</div>
        <div id="mobile-menu-wrap">
          <nav className="header-mobile position-fix">
            <ul>
              <li className="active">
                <Link to="/" onClick={handleOverlayClick}>
                  Home
                </Link>
              </li>
              <li>
                <a href="/#equipo" onClick={handleOverlayClick}>
                  Equipo
                </a>
              </li>
              <li>
                <Link to="/servicios" onClick={handleOverlayClick}>
                  Servicios
                </Link>
              </li>
              <li>
                <a href="/#testimonials" onClick={handleOverlayClick}>
                  Testimonios
                </a>
              </li>
              <li style={{ position: 'relative' }}>
                <a href="#" onClick={handleOverlayClick}>
                  Blog
                </a>
                {/*<span className="proximamente">próximamente</span>*/}
              </li>
              <li>
                <a href="/#faqs" onClick={handleOverlayClick}>
                  FAQS
                </a>
              </li>
              <li>
                <a href="/contacto" onClick={handleOverlayClick}>
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="offcanvas__widget">
          <span className="title">Contacto</span>
          <h4>hello@effilms.com.ar</h4>
          <h4>+54 9 2236 688588</h4>
          <div className="landing__redes--mobile">
            <a
              href="https://api.whatsapp.com/send?phone=542236688588&text=Hola, me gustaría pedirles un presupuesto para mi alojamiento."
              target="_blank"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href="https://www.instagram.com/effilms.com.ar/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.facebook.com/effilmscomar-113490327151297" target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.youtube.com/channel/UCJcK7K_8LmDJ68tQeh776Wg" target="_blank">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>

      <header className={`header animate__animated ${showNav ? 'fixed animate__fadeIn' : ''}`}>
        <div className="container-fluid">
          <div className="row no-gutters">
            <div className="col-lg-3">
              <div className="header__logo">
                <a className={'logo'} href="http://effilms.com.ar">
                  <span className="bebas">EF</span>
                  <span className="dot">.</span>
                  <span className="bebas films">FILMS</span>
                </a>
              </div>
            </div>
            <div className="col-lg-9">
              <nav className={`header__menu mobile-menu ${showNav ? 'position-fix' : ''}`}>
                <ul>
                  <li className="active">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <a href="/#equipo">Equipo</a>
                  </li>
                  <li>
                    <Link to="/servicios">Servicios</Link>
                  </li>
                  <li>
                    <a href="/#testimonials">Testimonios</a>
                  </li>
                  <li style={{ position: 'relative' }}>
                    <a href="/blog">Blog</a>
                    {/*<span className="proximamente">próximamente</span>*/}
                  </li>
                  <li>
                    <a href="/#faqs">FAQS</a>
                  </li>
                  <li>
                    <Link to="/contacto">Contacto</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="canvas__open" onClick={handleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;

import React, { useEffect, useMemo, useState } from 'react';
import './Nav.scss';

import { Link, useLocation } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import Navigation from './Navigation';
import { HOME_NAV, INMERSIVE_NAV, SERVICES_NAV } from '../../../data/navigations';
import { useScrollSpy } from '../../../hooks/useScrollSpy';

const Nav: React.FC = () => {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [isEFfilms, setIsEFfilms] = useState(false);


  const activeSection = useScrollSpy([
    'equipo',
    'testimonials',
    'faqs',
    'modalidad',
    'individuals',
    'monthly',
    'plan6m',
  ]);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY >= 700);
    };

    window.addEventListener('scroll', handleScroll);

    return () =>
      window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = useMemo(() => {
    if (location.pathname.startsWith('/servicios')) {
      setIsEFfilms(true);
      return SERVICES_NAV;
    } else if (location.pathname.startsWith('/studio')) {
      return INMERSIVE_NAV;
    }
    setIsEFfilms(false);
    return HOME_NAV;
  }, [location.pathname]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Overlay */}

      <div
        className={`offcanvas-menu-overlay ${menuOpen ? 'active' : ''}`}
        onClick={closeMenu}
      />

      {/* ================= MOBILE ================= */}

      <div
        className={`header offcanvas-menu-wrapper ${menuOpen ? 'active' : ''}`}
      >
        <div className="offcanvas__logo">
          {/*EF FILMS*/}
          {isEFfilms ? 'EF FILMS' : 'EF STUDIO'}
        </div>

        <nav className="header-mobile">
          <Navigation
            items={navigation}
            activeSection={activeSection}
            mobile
            onNavigate={closeMenu}
          />
        </nav>

        <div className="offcanvas__widget">
          <span className="title">
            Contacto
          </span>

          <h4>hello@effilms.com.ar</h4>
          <h4>+54 9 2236 688588</h4>

          <div className="landing__redes--mobile">

            <a
              href="https://api.whatsapp.com/send?phone=542236688588"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>

            <a
              href="https://www.instagram.com/effilms.com.ar/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a
              href="https://www.facebook.com/effilmscomar-113490327151297"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>

            <a
              href="https://www.youtube.com/channel/UCJcK7K_8LmDJ68tQeh776Wg"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>

          </div>
        </div>
      </div>

      {/* ================= DESKTOP ================= */}

      <header
        className={`header animate__animated ${
          showNav ? 'fixed animate__fadeIn' : ''
        }`}
      >
        <div className="container-fluid">

          <div className="row no-gutters">

            <div className="col-lg-3">

              <div className="header__logo">
                { isEFfilms && (
                  <Link
                    to="/"
                    className="logo"
                  >
                    <span className="bebas">EF</span>
                    <span className="dot">.</span>
                    <span className="bebas films">
                      FILMS
                    </span>
                  </Link>
                )}   

                { !isEFfilms && (
                  <Link
                    to="/"
                    className="logo"
                  >
                    <span className="bebas">EF</span>
                    <span className="dot">.</span>
                    <span className="bebas films" style={{marginLeft: "2px"}}>
                      STUDIO
                    </span>
                  </Link>
                )}              

              </div>

            </div>

            <div className="col-lg-9">

              <nav
                className={`header__menu ${
                  showNav ? 'position-fix' : ''
                }`}
              >
                <Navigation
                  items={navigation}
                  activeSection={activeSection}
                />
              </nav>

            </div>

          </div>

          <div
            className="canvas__open"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>

        </div>

      </header>

    </>
  );
};

export default Nav;

import React, { useEffect, useRef, useState } from "react";
import "./Landing.scss";

import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const Landing: React.FC = () => {
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateMotionPreference = () => {
      setReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    const videos = [
      desktopVideoRef.current,
      mobileVideoRef.current,
    ].filter((video): video is HTMLVideoElement => video !== null);

    if (reducedMotion) {
      videos.forEach((video) => video.pause());
      return;
    }

    videos.forEach((video) => {
      if (video.readyState >= 3) {
        setVideoReady(true);
      }
    });
  }, [reducedMotion]);

  const handleVideoReady = () => {
    setVideoReady(true);
  };

  const whatsappUrl =
    "https://api.whatsapp.com/send?phone=542236688588&text=" +
    encodeURIComponent(
      "Hola! Me gustaría conversar sobre un proyecto audiovisual."
    );

  return (
    <section
      className={`landing${videoReady ? " landing--video-ready" : ""}`}
      id="landing"
      aria-labelledby="landing-title"
    >
      <div className="landing__media" aria-hidden="true">
        <video
          ref={desktopVideoRef}
          className="landing__video landing__video--desktop"
          autoPlay={!reducedMotion}
          muted
          playsInline
          loop
          preload="metadata"
          poster="/images/landing-poster.webp"
          onCanPlay={handleVideoReady}
        >
          <source src="/videos/background-web.mp4" type="video/mp4" />
        </video>

        <video
          ref={mobileVideoRef}
          className="landing__video landing__video--mobile"
          autoPlay={!reducedMotion}
          muted
          playsInline
          loop
          preload="none"
          poster="/images/landing-poster-mobile.webp"
          onCanPlay={handleVideoReady}
        >
          <source src="/videos/background-mobile.m4v" type="video/mp4" />
        </video>

        <div className="landing__overlay" />
      </div>

      <div className="landing__main">
        <div className="landing__content">
          <p className="landing__eyebrow">
            Producción audiovisual
            <span aria-hidden="true"> / </span>
            Arquitectura
            <span aria-hidden="true"> / </span>
            Real estate
          </p>

          <h1 id="landing-title" className="landing__title">
            QUE SEA <span>ÉPICO</span>.
          </h1>

          <p className="landing__description">
            Creamos clips audiovisuales alto impacto visual orientado a arquitectura, alojamientos y real estate.
          </p>

          <div className="landing__actions">
            <a className="landing__button landing__button--primary" href="/proyectos/">
              Explorar proyectos
              <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
            </a>

            <a
              className="landing__button landing__button--secondary"
              href="/contacto/"
            >
              Iniciar un proyecto
            </a>
          </div>
        </div>
      </div>

      <nav className="landing__socials" aria-label="Redes sociales">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>

        <a
          href="https://www.instagram.com/effilms.com.ar/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram de EF FILMS"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>

        <a
          href="https://www.facebook.com/effilmscomar-113490327151297"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook de EF FILMS"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>

        <a
          href="https://www.youtube.com/channel/UCJcK7K_8LmDJ68tQeh776Wg"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube de EF FILMS"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </nav>

      <a
        className="landing__scroll"
        href="#video"
        aria-label="Continuar hacia la siguiente sección"
      >
        <span>Descubrí nuestra mirada</span>
        <FontAwesomeIcon icon={faArrowDown} aria-hidden="true" />
      </a>
    </section>
  );
};

export default Landing;

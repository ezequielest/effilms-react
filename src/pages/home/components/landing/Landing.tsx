import React, { useEffect, useState } from 'react';
import './Landing.scss';
import { faFacebook, faInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export const Landing: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  // Simulación de carga progresiva
  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + 1, 100);
        if (next === 100) setLoaded(true);
        return next;
      });
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  // Escucha la carga real del video
  useEffect(() => {
    const video = document.querySelector('video');
    if (!video) return;

    const handleCanPlay = () => setLoaded(true);
    video.addEventListener('canplaythrough', handleCanPlay, { once: true });

    return () => video.removeEventListener('canplaythrough', handleCanPlay);
  }, []);

  function round(val: number) {
    return Math.round(val);
  }

  return (
    <section className="landing" id="landing">
      <div className="overlay"></div>

      <video id="video_background" loop muted autoPlay preload="auto">
        <source src="/videos/background-web.mp4" type="video/mp4" />
      </video>

      <video
        playsInline
        id="video_background-mobile"
        loop
        muted
        autoPlay
        style={{ display: 'none' }}
        preload="auto"
      >
        <source src="/videos/background-mobile.m4v" type="video/mp4" />
      </video>

      <div className="landing-text">
        <div className="container">
          {!loaded && (
            <div className="loader-progress">
              <p>Renderizando</p>
              <progress id="file" max="100" value={progress}>
                {round(progress)}%
              </progress>
            </div>
          )}

          {loaded && (
            <div className="landing__content">
              <h5>LLEVÁ TU IMAGEN</h5>
              <h3>AL SIGUIENTE NIVEL</h3>
            </div>
          )}
        </div>
      </div>

      <div className="landing__redes">
        <a
          href="https://api.whatsapp.com/send?phone=542236688588&text=Hola, me gustaría pedirles un presupuesto."
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

      <div className="landing__conocenos">
        <div className="icon">
          <FontAwesomeIcon icon={faArrowDown} />
        </div>
      </div>
    </section>
  );
};

export default Landing;

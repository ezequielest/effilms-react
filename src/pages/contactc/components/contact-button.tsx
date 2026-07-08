import React from 'react';
import './contact-button.scss';
import {
  faInstagram,
  faServicestack,
  faWebAwesome,
  faWhatsapp,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ContactButton: React.FC = () => {
  return (
    <>
      <section className="selection bg-gray-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="selection-buttons">
                <a className="btn-value" target="_blank" href="./">
                  {' '}
                  <FontAwesomeIcon icon={faWebAwesome} /> SITIO WEB
                </a>
                <a
                  className="btn-value"
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=542236688588&text=Hola, me gustaría entrar en contacto con ustedes!"
                >
                  <FontAwesomeIcon icon={faWhatsapp} /> WHATSAPP
                </a>
                <a className="btn-value" target="_blank" href="./services">
                  <FontAwesomeIcon icon={faServicestack} /> SERVICIOS
                </a>
                <a
                  className="btn-value"
                  target="_blank"
                  href="https://www.instagram.com/effilms.com.ar"
                >
                  <FontAwesomeIcon icon={faInstagram} /> INSTAGRAM
                </a>
                <a
                  className="btn-value"
                  target="_blank"
                  href="https://www.youtube.com/@effilms4727"
                >
                  <FontAwesomeIcon icon={faYoutube} /> YOUTUBE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactButton;

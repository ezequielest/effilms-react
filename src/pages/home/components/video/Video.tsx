import React from 'react';
import './Video.scss';

export const Video: React.FC = () => {
  return (
    <>
      <section className="services ef-films spad" id="enfoque">
        <div className="container">
          <div className="vertical" style={{ top: '130px' }}>
            EF<span className="dot-background">.</span>
          </div>
          <div className="services__details">
            <div className="row">
              <div className="col-12 services__item">
                <h1 className="bebas">
                  EF <span className="ef-circle films"></span>{' '}
                  <span className="ef-films-color">FILMS</span>
                </h1>
              </div>
              <div className="col-12 col-md-4">
                <div
                  className="services__item"
                  style={{ display: 'flex', justifyContent: 'center' }}
                >
                  <video
                    src="/videos/laslomas.mp4"
                    controls
                    poster="/img/placeholder-video-gm.jpg"
                    style={{ width: '100%' }}
                  >
                    Tu navegador no admite el elemento <code>video</code>.
                  </video>
                </div>
              </div>
              <div className="col-12 col-md-7">
                <div className="services__item">
                  <p className="justify">
                    Producimos <b>contenido audiovisual</b> de alta calidad para que te destaques.
                    Queremos llevar la imagen de tu empresa <b>al siguiente nivel</b>. Por esa
                    razón, buscamos siempre la originalidad{' '}
                    <b>manteniendo la escencia de la marca</b>. Cuidamos los detalles en cada
                    proyecto y consideramos que <b>siempre hay una manera diferente y creativa</b>{' '}
                    de llevar a cabo las ideas.
                  </p>
                  <div className="row">
                    <div className="col-12 col-lg-6">
                      <ul className="ef-points">
                        <li>
                          <span className="primary-style">01</span> Arquitectura
                        </li>
                        <li>
                          <span className="primary-style">02</span> Real estate
                        </li>
                      </ul>
                    </div>
                    <div className="col-12 col-lg-6">
                      <ul className="ef-points">
                        <li>
                          <span className="primary-style">03</span> Desarrollos
                        </li>
                        <li>
                          <span className="primary-style">04</span> Alojamientos
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Video;

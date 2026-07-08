import React from 'react';
import './Callto.scss';

export const Callto: React.FC = () => {
  return (
    <>
      <section id="valores" className="callto spad set-bg rumenco">
        <div className="overlay"></div>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-10 text-center">
              <div className="callto__text">
                <span>Queremos hacer</span>
                <h2>tus ideas realidad</h2>

                <div className="btn-valores">
                  <h6 className="description">
                    ACÁ PODES CONOCER CUALES SON LOS DETALLES DE NUESTROS
                  </h6>
                  <a className="btn-value" href="/valores-landing">
                    PRECIOS Y SERVICIOS
                  </a>
                </div>

                <h6 className="description">CONOCÉ NUESTROS ÚLTIMOS TRABAJOS EN</h6>
                <a
                  className="insta"
                  href="https://www.instagram.com/effilms.com.ar"
                  target="_blank"
                >
                  <button className="redes insta">INSTAGRAM</button>
                </a>
                <a
                  className="youtube"
                  href="https://www.youtube.com/channel/UCJcK7K_8LmDJ68tQeh776Wg"
                  target="_blank"
                >
                  <button className="redes youtube">YOUTUBE</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Callto;

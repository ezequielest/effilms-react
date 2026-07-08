import React from 'react';
import './Us.scss';

export const Us: React.FC = () => {
  return (
    <>
      <section className="clip" id="nosotros">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <span>DETRÁS DE</span>
              <h1 className="bebas">EF . FILMS</h1>

              <div className="quienes-somos">
                <div className="description">
                  Somos un equipo marplatense de producción audiovisual. Somos divertidos y
                  autoexigentes. Queremos que tu producción destaque y eso nos lleva a ser siempre
                  más creativos y originales.
                </div>

                <div className="img-nosotros">
                  <img src="./img/lente-sigma.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Us;

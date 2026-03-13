import React from 'react';
import type { IServices } from '../../../core/models/Iservices';
import './ServiceCard.scss'

interface CardProps {
    service: IServices;
}

function ServiceCard({service}: CardProps) {   

  return (
    <>
      <div className={`card-value ${service.isHighlighted ? 'highlighted' : ''}`}>
        {service.isHighlighted && (
          <div className="label-highlighted">RECOMENDADO</div>
        )}

        {service.isPromo && (
          <div className="label-highlighted">10% OFF</div>
        )}

        <div className="header-card">
          <div className="image-container gopro">
            <div className="title">{service.service}</div>
          </div>
        </div>

        <div className="content">
          <div className="subtitle">{service.description}</div>

          {service.hours && (
            <div style={{ fontSize: '10px', fontWeight: 'bold', color: '#4d7d51' }}>
              Tiempo estimado de producción: {service.hours}hs
            </div>
          )}

          {service.video && (
            <a target="_blank" href={service.video} className="link" rel="noopener noreferrer">
              &gt; ver ejemplo
            </a>
          )}

          {service.slider && (
            <p>ACTIVAR</p>
            /*<a onClick={() => showSlider(service.slider)} className="link">
              &gt; ver ejemplo
            </a>*/
          )}

          <div className="prices">
            <div>
              {service.prices && service.prices.length > 0 && (
                <select>
                  <option defaultChecked>Seleccionar m2</option>
                  {service.prices.map((price, i) => (
                    <React.Fragment key={i}>
                    <option>Hasta {price.maxM2}m2 cubiertos</option>
                    </React.Fragment>
                  ))}
                </select> 
              )}
            </div>
          </div>
        </div>
      </div>

    </>
  );

}

export default ServiceCard;
import React from 'react';

import './ServiceType.scss';
import { serviceTypes } from '../../../../data/serviceType';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck,faXmark } from '@fortawesome/free-solid-svg-icons';
import { ServiceGroup } from '../../../../core/models/ServiceGroup.enum';

export const ServiceType: React.FC = () => {

  return (
    <section className="service-type spad table-price bg-gray-4">
      <div className="container">
        
        {/* Título principal de la sección opcional */}
        <div className="row mb-5 text-center">
          <div className="col">
            <h2 className="general-title display-4 fw-bold">PRIMERO DEFINAMOS QUE TIPO DE SERVICIO BUSCAS</h2>
          </div>
        </div>

        {/* Grilla de 4 columnas (1 col en mobile, 2 en tablets, 4 en desktop) */}
        <div className="row g-4">
          {serviceTypes.map((serviceType, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-6">
              <div className="card h-100 text-center p-4 border-0 shadow-sm">
                <div className="card-body d-flex flex-column">

                   {serviceType.key === ServiceGroup.INITIAL && (
                    <div className="picture pic-initial"></div>  
                  )}
                  {serviceType.key === ServiceGroup.STANDARD && (
                    <div className="picture pic-standard"></div>  
                  )}
                  {serviceType.key === ServiceGroup.PREMIUM && (
                    <div className="picture pic-premium"></div>  
                  )}  
                  {serviceType.key === ServiceGroup.CONTENT_CREATION && (
                    <div className="picture pic-content-creation"></div>  
                  )}        

                  <h3 className="card-title h4 mb-5 fw-semibold primary-color">
                    {serviceType.title}
                  </h3>
                  
                  <div className="card-text text-muted mb-5">
                    {serviceType.description}
                  </div>

                  <div className="mb-4">
                  {serviceType.listPro && serviceType.listPro.length > 0 && (
                    <div>
                    <span className="text-success">PROS</span>
                    <ul className="list-group list-group-flush mb-3">
                    {serviceType.listPro.map((item, idx) => (
                        <li key={idx} className="list-group-item">
                        <FontAwesomeIcon icon={faCheck} className="text-success" /> {item}
                        </li>
                      ))}
                    </ul>
                    </div>
                  )}
                    </div>   

                  <div className="mb-3">
                    {serviceType.listDownSide && serviceType.listDownSide.length > 0 && (
                    <div>
                    <span className="text-danger">NO INCLUYE</span>
                    <ul className="list-group list-group-flush mb-3">
                      {serviceType.listDownSide.map((item, idx) => (
                        <li key={idx} className="list-group-item">
                          <FontAwesomeIcon icon={faXmark} className="text-danger" /> {item}
                        </li>
                      ))}
                    </ul>
                    </div>
                  )}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceType;
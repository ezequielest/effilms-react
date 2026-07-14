import React from 'react';
import './ExplanetionDiscount.scss';

export const ExplanetionDiscount: React.FC = () => {
  return (
    <>
      <section className="explanetion-discount spad table-price bg-gray-1">
        <div className='container'>
            <div className="row">
                    <h2 className="title mb-4">¿Cómo calculamos el descuento?</h2>
                    <p className='text-center description mb-4'>
                        Los valores de los planes Mensual y 6M se calculan tomando como referencia el precio de una producción individual correspondiente al primer tramo de superficie (hasta 200 m²), configurada con todos los servicios incluidos del nivel seleccionado. A partir de ese valor base se aplica el descuento correspondiente:
                    </p>
                    <ul className='list-group list-group-flush text-center'>
                        <li className='list-group-item'>Pack Mensual: 10% de descuento.</li>
                        <li className='list-group-item'>Plan 6M: 20% de descuento.</li>
                    </ul>

                
            </div>

        </div> 
      </section>
    </>
  );
};

export default ExplanetionDiscount;

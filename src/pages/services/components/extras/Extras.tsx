import React from 'react';
import './Extras.scss';
import BoxCardInverted from '../../../../shared/components/box-card-inverted/Box-card-inverted';

export const Extras: React.FC = () => {
  const promotions = [
    {
      preDiscount: '$',
      discount: 10000,
      postDiscount: '.-',
      preDescription: '',
      description: 'Retiro de llave',
      postDescription: '',
    },
    {
      preDiscount: '$',
      discount: 15000,
      postDiscount: '.-',
      preDescription: '',
      description: 'Adaptación de formato',
      postDescription: '',
    },
    {
      preDiscount: '',
      discount: 40,
      postDiscount: '% del valor',
      preDescription: '',
      description: 'Solo Crudos',
      postDescription: '',
    },
    {
      preDiscount: '',
      discount: 25,
      postDiscount: '% del valor',
      preDescription: '',
      description: 'Crudo adicional',
      postDescription: '',
    },
  ];
  return (
    <>
      <section className="promotions spad table-price bg-gray-3">
        <div>
          <h2 className="title">SERVICIOS EXTRA</h2>
        </div>
        <BoxCardInverted boxArray={promotions} />
      </section>
    </>
  );
};

export default Extras;

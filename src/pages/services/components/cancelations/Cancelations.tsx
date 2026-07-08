import React from 'react';
import './Cancelations.scss';
import BoxCardInverted from '../../../../shared/components/box-card-inverted/Box-card-inverted';

export const Cancelations: React.FC = () => {
  const promotions = [
    {
      preDiscount: 'con ',
      discount: 48,
      postDiscount: ' de anticipación',
      preDescription: '',
      description: 'Reprogramaciones',
      postDescription: '',
    },
    {
      preDiscount: '',
      discount: 20,
      postDiscount: '% del valor de la producción',
      preDescription: '',
      description: 'Ante no show',
      postDescription: '',
    },
  ];
  return (
    <>
      <section className="promotions spad table-price bg-gray-3">
        <div>
          <h2 className="title">CANCELACIONES</h2>
        </div>
        <BoxCardInverted boxArray={promotions} />
      </section>
    </>
  );
};

export default Cancelations;

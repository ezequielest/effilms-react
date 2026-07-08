import React from 'react';
import './Promotions.scss';
import BoxCard from '../../../../shared/components/box-card/Box-card';
import type { IBoxcard } from '../../../../core/models/IBoxCard';

export const Promotions: React.FC = () => {
  const promotions: Array<IBoxcard> = [
    {
      preDiscount: '',
      discount: 10,
      postDiscount: '',
      preDescription: '',
      description: 'En tu primera producción',
      postDescription: '%OFF',
    },
    {
      preDiscount: '',
      discount: 10,
      postDiscount: '',
      preDescription: '',
      description: 'Contratando 5 o más producciones',
      postDescription: '%OFF',
    },
    {
      preDiscount: '',
      discount: 10,
      postDiscount: '',
      preDescription: '',
      description: 'Cobertura de monoambientes',
      postDescription: '%OFF',
    },
    {
      preDiscount: '',
      discount: 10,
      postDiscount: '',
      preDescription: '',
      description: 'Producciones en días nublados',
      postDescription: '%OFF',
    },
  ];
  return (
    <>
      <section className="promotions spad table-price bg-gray-3">
        <div>
          <h2 className="title">PROMOCIONES VIGENTES</h2>
        </div>
        <BoxCard boxArray={promotions} />
      </section>
    </>
  );
};

export default Promotions;

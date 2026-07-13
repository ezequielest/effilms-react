import React from 'react';
import './Plan6m.scss';

const Plan6m: React.FC = () => {
  const plans = [
    {
      title: 'INICIAL',
      items: [
        { months: '6', price: '$150.000.-' },
        { months: '12', price: '$280.000.-' },
        { months: '18', price: '$390.000.-' },
        { months: '24', price: '$520.000.-' },
      ],
    },
    {
      title: 'ESTANDAR',
      items: [
        { months: '6', price: '$300.000.-' },
        { months: '12', price: '$580.000.-' },
        { months: '18', price: '$840.000.-' },
        { months: '24', price: '$1080.000.-' },
      ],
    },
    {
      title: 'PREMIUM',
      items: [
        { months: '6', price: '$560.000.-' },
        { months: '12', price: '$1050.000.-' },
      ],
    },
  ];

  return (
    <section className="plan6m plan6m__container container">
      <div className="row">
        {plans.map((plan, idx) => (
          <div key={idx} className="col-12 col-md-6 col-lg-4">
            <h2 className="plan6m__title">{plan.title}</h2>
            <div className="sub-description">
              <div>PRODUCCIONES</div>
              <div>VALOR</div>
            </div>
            <div className="plan6m__items">
              {plan.items.map((item, itemIdx) => (
                <div key={itemIdx} className="plan6m__item">
                  <span className="plan6m__cant">{item.months}</span>
                  <span className="plan6m__price">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plan6m;

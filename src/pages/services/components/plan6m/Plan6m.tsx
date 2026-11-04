import React from "react";
import "./Plan6m.scss";

const Plan6m: React.FC = () => {
  const plans = [
    {
      title: "INICIAL",
      items: [
        { months: "6", price: "$145.000.-" },
        { months: "12", price: "$270.000.-" },
        { months: "18", price: "$385.000.-" },
        { months: "24", price: "$490.000.-" },
      ],
    },
    {
      title: "ESTANDAR",
      items: [
        { months: "6", price: "$310.000.-" },
        { months: "12", price: "$600.000.-" },
        { months: "18", price: "$870.000.-" },
        { months: "24", price: "$1120.000.-" },
      ],
    },
    {
      title: "PREMIUM",
      items: [
        { months: "6", price: "$540.000.-" },
        { months: "12", price: "$1060.000.-" },
      ],
    },
  ];

  return (
    <section className="plan6m bg-1">
      <div className="container">
        <div className="row">
          {plans.map((plan, idx) => (
            <div key={idx} className="col-12 col-md-6 col-xl-4">
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
      </div>
    </section>
  );
};

export default Plan6m;

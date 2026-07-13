import type { Iplans } from '../../../../core/models/Iplans';
import { formatNumber } from '../../../utils/numbers';
import './CardPlan.scss';

interface CardProps {
  index: number;
  plan: Iplans;
  cantMonthSelected: number;
  percentDiscount: number;
}

function CardPlan({ index, plan, cantMonthSelected }: CardProps) {
  const availablesPlaces: number = 2;

  return (
    <>
      <div className={`monthly-container ${index % 2 === 0 ? 'middle' : ''}`}>
        {plan.isHighlighted && <div className={`monthy-highlighted`}>MÁS SOLICITADO</div>}

        {plan.availablePlaces > 0 && (
          <div>
            <div className={`monthy-highlighted info`}>{availablesPlaces} CUPOS DISPONIBLES</div>
            {<div className={`monthy-highlighted success`}>{plan.totalPercentDiscount}%OFF</div>}
          </div>
        )}
        {plan.availablePlaces === 0 && <div className={`monthy-highlighted`}>AGOTADO</div>}

        <div>
          <h2 className="title">{plan.title}</h2>
        </div>
        <div>
          <ul className="list">
            <li>
              <span className="cant-prod">{cantMonthSelected}</span> PRODUCCIONES
            </li>
            {/*plan.included.map((service, index) => (
              <li className={service.class} key={index}>
                {service.description}
              </li>
            ))*/}
          </ul>
        </div>
        <div className="price-container">
          <h3 className="price">${formatNumber(plan.value)}.-</h3>
          <h5 className="save-cash">AHORRAS ${formatNumber(plan.saveCash)}.-</h5>
        </div>
      </div>
    </>
  );
}

export default CardPlan;

import type { Iplans } from "../../../../core/models/Iplans";
import { formatNumber } from "../../../utils/numbers";
import './CardPlan.scss';

interface CardProps {
    index: number;
    plan: Iplans;
    cantMonthSelected: number;
    percentDiscount: number
}

function CardPlan({index, plan, cantMonthSelected, percentDiscount}: CardProps) {   

  return (
    <>
      <div className={`monthly-container ${index % 2 === 0 ? 'middle' : ''}`}>
        { plan.isHighlighted &&
            <div className={`monthy-highlighted`}>MÁS SOLICITADO</div>
        }

        { percentDiscount > 0 &&
         <div className={`monthy-highlighted`}>{plan.totalPercentDiscount}%OFF</div>
        }
        
        <div>
          <h2 className="title">{plan.title}</h2>
        </div>
        <div>
          <ul className="list">
            <li><span className="cant-prod">{cantMonthSelected}</span> PRODUCCIONES AUDIOVISUALES</li>
            { plan.included.map((service, index) => (
                <li className={service.class} key={index}>{service.description}</li>
            ))
            }
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
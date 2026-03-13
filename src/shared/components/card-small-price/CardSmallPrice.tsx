import type { IServicesSmall } from '../../../core/models/Iservices';
import { formatNumber } from '../../utils/numbers';
import './CardSmallPrice.scss'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface CardProps {
    key: number;
    service: IServicesSmall;
}


function CardSmallPrice({service}: CardProps) {   
  return (
    <>
      <div className={`card-value highlighted${service.isHighlighted ? 'highlighted' : ''}`} key={service.id}>

        {service.isPromo && (
          <div className="label-highlighted">{service.discount}</div>
        )}

        <div className={`header-card `}>
          <div className="image-container gopro">
            <div className="title">{service.service}</div>
          </div>
        </div>

        <div className="content">
          <div className="description">
            {service.description}
              <div className={"examples"}>
              {service.video && (
                <a target="_blank" href={service.video} className="link" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faArrowRightLong} className='icon' /> ver ejemplo
                </a>
              )}
            </div>
          </div>
          
          <div className='prices'>
            <div>
              Desde ${formatNumber(service.priceSince)}.-
            </div>
          </div>
        </div>
      </div>

    </>
  );

}

export default CardSmallPrice;
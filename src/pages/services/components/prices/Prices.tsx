import { customArray, servicesArray } from '../../../../data/services';
import { serviceTypes } from '../../../../data/serviceType';
import ServiceCard from '../../../../shared/components/card-price/ServiceCard';
import CardSmallPrice from '../../../../shared/components/card-small-price/CardSmallPrice';
import './Prices.scss';

export const Prices: React.FC = () => {


  return (
    <>
      {serviceTypes.map((serviceType) => {
        const filteredServices = servicesArray.filter((s) => s.group === serviceType.key);

        return (
          <section
            id="custom"
            key={serviceType.id}
            className={`values-page spad ${serviceType.class}`}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="title">{serviceType.title}</h2>
                  <h4 className="sub-title">{serviceType.subTitle}</h4>
                  <p className="description">{serviceType.description}</p>
                </div>
              </div>
              <div className="row">
                <div className="service-card-container">
                  {filteredServices.map((service) => (
                    <ServiceCard key={service.id} service={service} serviceType={serviceType} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}
      <section id="custom" className={`values-page spad`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="title">SERVICIOS CUSTOM</h2>
              <h4 className="sub-title">Servicios a medida</h4>
            </div>
          </div>
          <div className="row">
            <div className="service-card-container">
              {customArray.map((service) => (
                <CardSmallPrice key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Prices;

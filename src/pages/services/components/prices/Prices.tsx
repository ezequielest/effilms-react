import type { IServiceType } from '../../../../core/models/IServiceType';
import { ServiceGroup } from '../../../../core/models/ServiceGroup.enum';
import { customArray, servicesArray } from '../../../../data/services';
import ServiceCard from '../../../../shared/components/card-price/ServiceCard';
import CardSmallPrice from '../../../../shared/components/card-small-price/CardSmallPrice';
import './Prices.scss';

export const Prices: React.FC = () => {
  const serviceTypes: Array<IServiceType> = [
    {
      id: 1,
      title: 'SERVICIOS INICIALES',
      subTitle: 'SMARTPHONE',
      key: ServiceGroup.INITIAL,
      description: `Ideal para dar los primeros pasos en el mundo audiovisual con un presupuesto accesible.
      Producciones de buena calidad realizadas con smartphones, pensadas para mostrar la propiedad de forma clara, simple y efectiva.
      Perfecto para publicaciones rápidas en redes y avisos inmobiliarios básicos.`,
      class: 'initial bg-gray-4',
    },
    {
      id: 2,
      title: 'SERVICIOS ESTANDAR',
      subTitle: 'EQUIPO ESTANDAR',
      key: ServiceGroup.STANDARD,
      description: `La opción profesional para mostrar una propiedad de manera clara, atractiva y confiable.
      Utilizamos cámara profesional y recursos gráficos estándar para destacar calles, lotes, accesos y zonas clave.
      Un equilibrio ideal entre calidad visual, información y presencia de marca.`,
      class: 'standard bg-gray-3',
    },
    {
      id: 3,
      title: 'SERVICIOS PREMIUM',
      subTitle: 'EQUIPO PROFESIONAL',
      key: ServiceGroup.PREMIUM,
      description: `Producciones de alto impacto pensadas no solo para mostrar una propiedad, sino para potenciar tu marca y generar crecimiento.
      Incluye mayor trabajo en preproducción y postproducción, con guión, planificación de rodaje y una narrativa visual cuidada.
      Se incorporan gráficos avanzados, animaciones, transiciones y recursos creativos que generan diferenciación. Tu producción impacta!`,
      class: 'premium bg-gray-4',
    },
  ];

  return (
    <>
      <section className="container-fluid individuals">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1 className="title">INDIVIDUALES</h1>
          </div>
        </div>
      </section>
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

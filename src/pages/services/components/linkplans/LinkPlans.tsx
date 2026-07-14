import React from 'react';
import './LinkPlans.scss';

export const LinkPlans: React.FC = () => {
  // Array con la info de tus 4 servicios
  const serviciosData = [
    {
      id: "individuals",
      titulo: "INDIVIDUALES",
      class: "",
      descripcion: "Elegi especificamente lo que necesitas de manera individual y a medida. Cotiza al instante!",
      listPro: [],
      listDownSide: [],
    },
    {
      id: "monthly",
      titulo: "FLEXIBLE",
      class: "",
      descripcion: "Realiza varias producciones en el mismo mes y obtene un descuento adicional al valor individual.",
      listPro: ['10% OFF', 'Prioridad de agenda'],
      listDownSide: []
    },
    {
      id: "plan6m",
      titulo: "A LARGO PLAZO",
      descripcion: "Contamos con nuestro PLAN 6M, un plan a 6 meses bajo contrato con un valor preferencial para los que apuestan a futuro.",
      listPro: ['+ 20% OFF', 'Bajo demanda', 'Prioridad de agenda', 'Precio congelado'],
      listDownSide: []
    }
  ];

  return (
    <section id="modalidad" className="link-plans spad table-price bg-gray-1">
      <div className="container">
        {/* Título principal de la sección opcional */}
        <div className="row mb-5 text-center">
          <div className="col">
            <span className="general-title-first display-4">Ahora que ya sabes que necesitas</span>
            <h2 className='general-title display-4 fw-bold'>¿DE QUÉ MANERA TE GUSTARÍA ADQUIRIR ESTE SERVICIO?</h2>
          </div>
        </div>

        {/* Grilla de 4 columnas (1 col en mobile, 2 en tablets, 4 en desktop) */}
        <div className="row g-4">
          {serviciosData.map((servicio, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 link-card text-center p-4 border-0 shadow-sm">
                <div className="card-body d-flex flex-column">
                  <h3 className="card-title h4 mb-3 fw-semibold">
                    {servicio.titulo}
                  </h3>
                  <p className={`card-text text-muted flex-grow-1 ${servicio.class}`}>
                    {servicio.descripcion}
                  </p>

                  <ul className='pro list-group list-group-flush mb-3 flex-grow-1'>
                    {servicio.listPro.map((pro) =>
                        <li className='list-group-item'>{pro}</li>
                    )}
                  </ul>

                  <div>
                    {servicio.id === "contentCreation" ? (
                      <div className="btn btn-secondary mt-3 text-uppercase fw-bold soon">
                        PRÓXIMAMENTE
                      </div>
                    ) : (
                      <a 
                        href={`#${servicio.id}`} 
                        className="btn btn-primary mt-3 text-uppercase fw-bold"
                      >
                        Conocer más
                      </a>
                    )}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LinkPlans;
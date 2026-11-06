import "./FlexSystem.scss";

const productions = [
  {
    name: "Inicial",
    credits: 10,
    duration: "1 hora",
    features: [
      "1 filmmaker",
      "Grabación con smartphone", 
      "Subtítulos",
      "Edición"
    ],
  },
  {
    name: "Estándar",
    credits: 20,
    duration: "1 hora y media",
    features: [
      "1 filmmaker",
      "Cámara profesional",
      "Edición",
      "Host incluido",
      "Subtítulos",
      "Textos HOOK"
    ],
    featured: true,
  },
  {
    name: "Premium",
    credits: 50,
    duration: "2 horas",
    features: [
      "2 filmmakers",
      "Cámara cine",
      "Impacto visual",
      "Edición profesional",
      "Incluye Modelados",
      "Incluye HOST",
      "Idea creativa",
      "Incluye IA",
      "Incluye DRON",
    ],
  },
];

const extras = [
  ["Fotografía", 5],
  ["Fotografía HDR", 10],
  ["Dron", 10],
  ["Host", 5],
  ["Crudos de clips", 5],
  ["Crudos totales originales", 10],
  ["Adaptación de formato", 5],
  ["Modelados", 5],
  ["Guion", 5],
  ["Idea creativa", 10],
  ["Implementación con IA", 5],
];

const packs = [
  { credits: 30, price: "$375.000" },
  { credits: 50, price: "$580.000" },
  { credits: 100, price: "$1.090.000" },
  { credits: 150, price: "$1.580.000", featured: true },
];

const FlexSystem = () => {
  return (
    <div className="bg-gray-1">
    <section className="credit-system container" id="cotizacion">

      {/* POR QUÉ CRÉDITOS */}
      <div className="credit-explanation">
        <h2>
            Combinar producciones <br></br>según <span>tu necesidad</span>.
        </h2>

        <div className="credit-description">
          <ul className="credit-benefits">
            <li>
              <span className="benefit-number">01</span>
              <span>Tenés créditos y los gastás como necesites.</span>
              <span className="benefit-arrow">↗</span>
            </li>

            <li>
              <span className="benefit-number">02</span>
              <span>Podés elegir cualquier nivel de producción.</span>
              <span className="benefit-arrow">↗</span>
            </li>

            <li>
              <span className="benefit-number">03</span>
              <span>Combiná producciones y adicionales según tus necesidades.</span>
              <span className="benefit-arrow">↗</span>
            </li>

            <li>
              <span className="benefit-number">03</span>
              <span>hasta 100 créditos de acumulación máxima</span>
              <span className="benefit-arrow">↗</span>
            </li>

          </ul>
        </div>

      </div>

      {/* NIVELES */}
      <div className="credit-productions">
        <div className="credit-section-heading">
          <h2>CRÉDITOS POR PRODUCCIÓN</h2>
          <p>Gasta los créditos que necesites.</p>
        </div>

        <div className="production-grid">
          {productions.map((item) => (
            <article
              className={`production-card ${
                item.featured ? "featured" : ""
              }`}
              key={item.name}
            >
              <span className="production-name">{item.name}</span>

              <div className="production-credits">
                {item.credits}
                <small> CRÉDITOS</small>
              </div>

              <div className="production-duration">
                RODAJE / {item.duration}
              </div>

              <ul>
                {item.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      {/* ADICIONALES */}
      <div className="credit-extras">
        <div className="credit-section-heading">
          <h2>ADICIONALES</h2>
          <p>
            Sumá servicios y recursos a tus producciones
            utilizando tus créditos disponibles.
          </p>
        </div>

        <div className="extras-list">
          {extras.map(([name, credits]) => (
            <div className="extra-item" key={name}>
              <span>{name}</span>
              <strong>{credits} CRÉDITOS</strong>
            </div>
          ))}
        </div>
      </div>

      {/* PACKS */}
      <div className="credit-packs" id="credit-packs">
        <div className="credit-section-heading">
          <span className="credit-number">INVERSIÓN</span>
          <h2>PACKS DE CRÉDITOS</h2>
          <p>
            Elegí la cantidad de créditos que necesitás
            y administralos según tu calendario de producción.
          </p>
        </div>

        <div className="packs-grid">
          {packs.map((pack, i) => (
            <article
              className={`pack-card ${
                pack.featured ? "featured" : ""
              }`}
              key={pack.credits}
            >
              <span>{ i+1}</span>

              <h3>{pack.credits}</h3>
              <small>CRÉDITOS</small>

              <div className="pack-price">{pack.price}</div>

              <a href={'https://api.whatsapp.com/send?phone=542236674588&text=Hola! Estoy interesado en adquirir el pack flexible n° ' + i}
                      target="_blank">
                SOLICITAR PLAN ↗
              </a>
            </article>
          ))}
        </div>
      </div>

    </section>
    </div>
  );
};

export default FlexSystem;

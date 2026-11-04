import './goToCotizador.scss';

const QuoteCTA = () => {
  const handleQuote = () => {
        window.location.href = "/servicios";
  };

  return (
    <section className="quote-cta">
      <div className="quote-cta__content">
        <span className="quote-cta__label">
            SOMO EFFILMS
        </span>

        <h2>
          ¿NECESITAS UNA <br></br>PRODUCCIÓN <span>ÉPICA</span>?
        </h2>

        <p>
          Contanos tu idea y hagámosla realidad.
        </p>

        <button
          className="btn btn-primary"
          onClick={handleQuote}
        >
          COTIZÁ TU PROYECTO
          <span>↗</span>
        </button>
      </div>
    </section>
  );
};

export default QuoteCTA;

import "./CTA.scss";

const CTA = () => {
    return (
        <section className="cta">

            <div className="container">

                <div className="cta__wrapper">

                    <span className="cta__eyebrow">
                        EF Interactive
                    </span>

                    <h2 className="cta__title">
                        Tu proyecto merece
                        <br />
                        una presentación
                        <br />
                        a la altura.
                    </h2>

                    <p className="cta__description mb-5 mt-4">
                        Ayudamos a desarrolladores, arquitectos y constructoras
                        a vender proyectos antes de que existan mediante
                        experiencias interactivas, recorridos web y contenido CGI.
                    </p>

                    <div className="cta__actions">

                        <a
                            href="#contact"
                            className="cta__button cta__button--primary"
                        >
                            Solicitar una reunión
                        </a>

                        <a
                            href="#projects"
                            className="cta__button cta__button--secondary"
                        >
                            Ver proyectos
                        </a>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default CTA;
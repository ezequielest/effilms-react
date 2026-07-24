import "./Process.scss";

const steps = [
    {
        number: "01",
        title: "Analizamos el proyecto",
        description:
            "Estudiamos la arquitectura, el entorno y los objetivos comerciales para definir la mejor experiencia."
    },
    {
        number: "02",
        title: "Creamos el mundo digital",
        description:
            "Modelamos, iluminamos y construimos una representación fotorrealista lista para ser explorada."
    },
    {
        number: "03",
        title: "Desarrollamos la experiencia",
        description:
            "Transformamos el contenido en una experiencia interactiva optimizada para cualquier dispositivo."
    },
    {
        number: "04",
        title: "Lanzamos la plataforma",
        description:
            "Publicamos el proyecto listo para compartir con clientes, inversores y equipos comerciales."
    }
];

const Process = () => {
    return (
        <section className="process">

            <div className="container">

                <div className="row">

                    <div className="col-lg-5">

                        <div className="process__intro">

                            <span className="process__eyebrow">
                                Nuestro proceso
                            </span>

                            <h2 className="process__title mb-4">
                                Del plano
                                <br />
                                a una experiencia
                                <br />
                                inmersiva.
                            </h2>

                            <p className="process__description">
                                Cada proyecto sigue un flujo de trabajo diseñado para
                                reducir tiempos, mejorar la comunicación y convertir
                                ideas en herramientas reales de venta.
                            </p>

                        </div>

                    </div>

                    <div className="col-lg-7">

                        <div className="process__timeline">

                            {steps.map((step) => (

                                <article
                                    className="process__item"
                                    key={step.number}
                                >

                                    <span className="process__number">
                                        {step.number}
                                    </span>

                                    <div className="process__content">

                                        <h3>{step.title}</h3>

                                        <p>{step.description}</p>

                                    </div>

                                </article>

                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Process;
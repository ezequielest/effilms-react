import "./Problem.scss";

const problems = [
    {
        number: "01",
        title: "El proyecto todavía no existe",
        description:
            "Planos, renders o imágenes aisladas muchas veces no alcanzan para transmitir el verdadero potencial de un desarrollo."
    },
    {
        number: "02",
        title: "El cliente no logra imaginarlo",
        description:
            "Sin una experiencia inmersiva es difícil comprender los espacios, las visuales y la relación con el entorno."
    },
    {
        number: "03",
        title: "Cada venta requiere más esfuerzo",
        description:
            "Cuando el producto no se entiende rápidamente, las reuniones se hacen más largas y las decisiones se retrasan."
    }
];

const Problem = () => {
    return (
        <section className="problem">

            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-lg-8">

                        <span className="problem__eyebrow">
                            El desafío
                        </span>

                        <h2 className="problem__title mb-4">
                            Vender algo que todavía no existe nunca fue fácil.
                        </h2>

                        <p className="problem__subtitle">
                            La mayoría de los desarrollos se presentan con herramientas
                            pensadas para mostrar, no para experimentar.
                        </p>

                    </div>

                </div>

                <div className="row g-4 problem__grid">

                    {problems.map((item) => (

                        <div
                            className="col-lg-4"
                            key={item.number}
                        >

                            <article className="problem__card">

                                <span className="problem__number">
                                    {item.number}
                                </span>

                                <h3>
                                    {item.title}
                                </h3>

                                <p>
                                    {item.description}
                                </p>

                            </article>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default Problem;
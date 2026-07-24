import "./Experience.scss";

const features = [
    {
        title: "Recorridos interactivos",
        description:
            "Permití que tus clientes exploren cada espacio con total libertad desde cualquier dispositivo."
    },
    {
        title: "Visualización fotorrealista",
        description:
            "Creamos imágenes y animaciones CGI que comunican el verdadero potencial del proyecto."
    },
    {
        title: "Contexto real",
        description:
            "Integramos el desarrollo con su entorno para mostrar vistas, iluminación y ubicación antes de construir."
    },
    {
        title: "Experiencias Web",
        description:
            "Publicá una experiencia interactiva lista para compartir desde tu web, redes sociales o reuniones comerciales."
    }
];

const Experience = () => {
    return (
        <section className="experience">

            <div className="container">

                <div className="row align-items-center gy-5">

                    <div className="col-lg-5">

                        <span className="experience__eyebrow">
                            La solución
                        </span>

                        <h2 className="experience__title mb-4">
                            Transformamos proyectos
                            en experiencias digitales.
                        </h2>

                        <p className="experience__description">
                            Combinamos visualización arquitectónica,
                            tecnología interactiva y producción audiovisual
                            para crear herramientas que ayudan a vender
                            antes de construir.
                        </p>

                    </div>

                    <div className="col-lg-7">

                        <div className="experience__grid">

                            {features.map((feature) => (

                                <article
                                    className="experience__card"
                                    key={feature.title}
                                >

                                    <div className="experience__icon">
                                        +
                                    </div>

                                    <h3>
                                        {feature.title}
                                    </h3>

                                    <p>
                                        {feature.description}
                                    </p>

                                </article>

                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Experience;
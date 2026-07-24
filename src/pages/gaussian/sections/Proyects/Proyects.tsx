import "./Proyects.scss";

const projects = [
    {
        id: "01",
        title: "Marina Residence",
        location: "Mar del Plata",
        category: "Interactive Experience",
        description:
            "Una experiencia web inmersiva para recorrer el edificio antes de comenzar la construcción."
    },
    {
        id: "02",
        title: "Ocean View",
        location: "Costa Atlántica",
        category: "CGI Animation",
        description:
            "Visualización cinematográfica para campañas comerciales y preventa."
    },
    {
        id: "03",
        title: "Distrito Norte",
        location: "Buenos Aires",
        category: "Web Experience",
        description:
            "Presentación interactiva optimizada para dispositivos móviles y escritorio."
    }
];

const Projects = () => {
    return (
        <section className="projects">

            <div className="container-fluid">

                {projects.map((project) => (

                    <div
                        className="projects__item"
                        key={project.id}
                    >

                        <div className="container">

                            <div className="row align-items-center">

                                <div className="col-lg-6">

                                    <div className="projects__viewer">

                                        <div className="projects__placeholder">
                                            Interactive Viewer
                                        </div>

                                    </div>

                                </div>

                                <div className="col-lg-6">

                                    <div className="projects__content">

                                        <span className="projects__number">
                                            {project.id}
                                        </span>

                                        <h2>
                                            {project.title}
                                        </h2>

                                        <span className="projects__location">
                                            {project.location}
                                        </span>

                                        <p>
                                            {project.description}
                                        </p>

                                        <a
                                            href="#contact"
                                            className="projects__button"
                                        >
                                            Explorar proyecto
                                        </a>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
};

export default Projects;
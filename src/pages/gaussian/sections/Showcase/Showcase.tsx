import "./Showcase.scss";

const Showcase = () => {
    return (
        <section className="showcase">

            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-xl-8">

                        <div className="showcase__header">

                            <span className="showcase__eyebrow">
                                Experiencia interactiva
                            </span>

                            <h2 className="showcase__title">
                                Descubrí un proyecto
                                antes de que exista.
                            </h2>

                            <p className="showcase__description">
                                Explorá cada ambiente, recorré los espacios,
                                entendé la relación con el entorno y visualizá
                                el proyecto como si ya estuviera construido.
                            </p>

                        </div>

                    </div>

                </div>

                <div className="showcase__viewer">

                    {/* Próximamente:
                        Video
                        React Three Fiber
                        Three.js
                        Gaussian Splatting
                    */}

                    <div className="showcase__placeholder">

                        <div className="showcase__screen">

                            <span>
                                Interactive Viewer
                            </span>

                        </div>

                    </div>

                </div>

                <div className="row justify-content-center">

                    <div className="col-xl-10">

                        <div className="showcase__features">

                            <div className="showcase__feature">
                                <h4>360°</h4>
                                <p>Recorrido libre</p>
                            </div>

                            <div className="showcase__feature">
                                <h4>Realtime</h4>
                                <p>Navegación fluida</p>
                            </div>

                            <div className="showcase__feature">
                                <h4>Web</h4>
                                <p>Sin instalar aplicaciones</p>
                            </div>

                            <div className="showcase__feature">
                                <h4>Mobile</h4>
                                <p>Compatible con cualquier dispositivo</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Showcase;
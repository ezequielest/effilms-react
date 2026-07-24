import "./Vision.scss";

const Vision = () => {
    return (
        <section className="vision">

            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-xl-10">

                        <div className="vision__content">

                            {/*<span className="vision__eyebrow">
                                Una nueva forma de presentar proyectos
                            </span>*/}

                            <h2 className="vision__title">
                                Las personas no
                                <br />
                                 compran planos.
                                <br/>
                                <span className="vision__sensation">Compran la sensación
                                <br />
                                de estar ahí.</span>
                            </h2>

                            <p className="vision__description">
                                Cuando un proyecto puede recorrerse, entenderse y experimentarse,
                                las decisiones llegan antes. Transformamos ideas en experiencias
                                inmersivas que generan confianza incluso antes de que exista la
                                primera piedra.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Vision;
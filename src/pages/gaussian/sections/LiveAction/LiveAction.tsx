import "./LiveAction.scss";
import GaussianViewer from "../../../../shared/components/gaussian-viewer/GaussianViewer";

export const Hero: React.FC = () => {

    return (
        <header className="live-action"
        >

            <div className="container h-100">

                <div className="row align-items-center h-100">

                    {/* ==========================
                        LEFT CONTENT
                    =========================== */}


                    <div className="col-lg-8">

                        <div className="hero__visual">

                            {/* Placeholder temporal.
                               Luego será un video o un Canvas */}
                            <div className="hero__viewer">

                                <div className="hero__viewer-overlay" />

                                <div className="hero__viewer-placeholder">
                                    <GaussianViewer url={'/splats/test.ply'} />
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* ==========================
                        RIGHT VISUAL
                    =========================== */}

                    <div className="col-lg-4">

                        <div className="hero__content">

                            <span className="hero__eyebrow">
                                EF Interactive
                            </span>

                            <h1 className="hero__title">
                                Hacemos visible
                                <br />
                                lo que todavía
                                <br />
                                no existe.
                            </h1>

                            <p className="hero__description mb-5 mt-3">
                                Creamos experiencias inmersivas,
                                recorridos interactivos y contenido
                                CGI para que tus clientes puedan
                                descubrir, recorrer y comprar un
                                proyecto antes de que sea construido.
                            </p>

                            <div className="hero__actions">
                                <a
                                    href="#demo"
                                    className="hero__button hero__button--primary"
                                >
                                    Ver Demo
                                </a>

                                <a
                                    href="#contact"
                                    className="hero__button hero__button--secondary"
                                >
                                    Solicitar reunión
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </header>
    );
};

export default Hero;
import { useRef } from "react";
import "./Hero.scss";
import TresDDisplay from "../../../../shared/components/3d-building/TresDDisplay";
// Definición de las interfaces para las propiedades del componente
interface ParallaxCardProps {
  altText?: string;
  maxRotation?: number; // Permite personalizar la intensidad del efecto (por defecto 15)
}

  // Tipado explícito de los estilos en línea
  const containerStyle: React.CSSProperties = {
    perspective: '1200px',
    width: '110%',
    margin: '0 auto',
    cursor: 'pointer',
  };

  /*const imageStyle: React.CSSProperties = {
    width: '100%',
    height: 'auto',
    borderRadius: '32px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
    transformStyle: 'preserve-3d',
    willChange: 'transform',
  };*/

export const Hero: React.FC<ParallaxCardProps> = ({  
  //altText = "Imagen Parallax",
  maxRotation = 15 
}) => {
  // Tipado explícito de las referencias del DOM
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  // Tipado del evento nativo de React para el movimiento del mouse
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image) return;

    // Obtener dimensiones del contenedor
    const { width, height, left, top } = container.getBoundingClientRect();

    // Calcular posición del mouse relativa al contenedor
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;

    // Calcular rotación basada en la propiedad maxRotation
    const rotateY = ((mouseX / width) * (maxRotation * 2)) - maxRotation;
    const rotateX = -((mouseY / height) * (maxRotation * 2)) + maxRotation;

    // Aplicar transformación
    image.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
  };

  const handleMouseEnter = (): void => {
    if (imageRef.current) {
      imageRef.current.style.transition = 'transform 0.1s ease-out';
    }
  };

  const handleMouseLeave = (): void => {
    if (imageRef.current) {
      imageRef.current.style.transition = 'transform 0.5s ease-in-out';
      imageRef.current.style.transform = 'rotateY(0deg) rotateX(0deg)';
    }
  };

    return (
        <header className="hero"
              ref={containerRef}
              style={containerStyle}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
        >

            <div className="container h-100">

                <div className="row align-items-center h-100">

                    {/* ==========================
                        LEFT CONTENT
                    =========================== */}

                    <div className="col-lg-6">

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

                    {/* ==========================
                        RIGHT VISUAL
                    =========================== */}

                    <div className="col-lg-6">

                        <div className="hero__visual">

                            {/* Placeholder temporal.
                               Luego será un video o un Canvas */}
                            <div className="hero__viewer">

                                <div className="hero__viewer-overlay" />

                                <div className="hero__viewer-placeholder">
                                    <TresDDisplay url={'/3d/torre.glb'} heightContainer="650px"/>
                                      {/*<img
                                        ref={imageRef}
                                        src={"/img-inmersive/9.png"}
                                        alt={altText}
                                        style={imageStyle}
                                      />*/}
                                </div>

                            </div>

                        </div>

                    </div>


                </div>

            </div>

            {/* ==========================
                Scroll Indicator
            =========================== */}

            <div className="hero__scroll">

                <span />

                <small>Scroll</small>

            </div>

        </header>
    );
};

export default Hero;
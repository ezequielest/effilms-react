import React, { useRef } from 'react';

// Definición de las interfaces para las propiedades del componente
interface ParallaxCardProps {
  imgSrc: string;
  altText?: string;
  maxRotation?: number; // Permite personalizar la intensidad del efecto (por defecto 15)
}

export const ParallaxCard: React.FC<ParallaxCardProps> = ({ 
  imgSrc, 
  altText = "Imagen Parallax",
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

  // Tipado explícito de los estilos en línea
  const containerStyle: React.CSSProperties = {
    perspective: '1000px',
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    cursor: 'pointer',
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: 'auto',
    borderRadius: '12px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
    transformStyle: 'preserve-3d',
    willChange: 'transform',
  };

  return (
    <div
      ref={containerRef}
      style={containerStyle}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        ref={imageRef}
        src={imgSrc}
        alt={altText}
        style={imageStyle}
      />
    </div>
  );
};

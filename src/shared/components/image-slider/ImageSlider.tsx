import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import "./ImageSlider.scss";

interface ImageSliderProps {
  images: string[];
  loop?: boolean;
  showArrows?: boolean;
  showDots?: boolean;
  onClose?: () => void;
}

const ImageSlider = ({
  images,
  loop = true,
  showArrows = true,
  showDots = true,
  onClose,
}: ImageSliderProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop,
    align: "start",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  if (!images.length) return null;

  return (
    <div className="image-slider">
      {onClose && (
        <button
          type="button"
          className="image-slider__close"
          onClick={onClose}
          aria-label="Cerrar galería"
        >
          ×
        </button>
      )}
      <div className="image-slider__viewport" ref={emblaRef}>
        <div className="image-slider__container">
          {images.map((image, index) => (
            <div className="image-slider__slide" key={`${image}-${index}`}>
              <img
                src={image}
                alt={`Imagen ${index + 1}`}
                className="image-slider__image"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {showArrows && images.length > 1 && (
        <>
          <button
            type="button"
            className="image-slider__arrow image-slider__arrow--prev"
            onClick={scrollPrev}
            aria-label="Imagen anterior"
          >
            ←
          </button>

          <button
            type="button"
            className="image-slider__arrow image-slider__arrow--next"
            onClick={scrollNext}
            aria-label="Imagen siguiente"
          >
            →
          </button>
        </>
      )}

      {showDots && images.length > 1 && (
        <div className="image-slider__dots">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`image-slider__dot ${
                index === selectedIndex ? "image-slider__dot--active" : ""
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;

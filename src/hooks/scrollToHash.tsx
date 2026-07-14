import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Si no hay hash, siempre volvemos arriba
    if (!hash) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

      return;
    }

    const id = hash.replace('#', '');

    let frame: number;

    const scroll = () => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });

        return;
      }

      frame = requestAnimationFrame(scroll);
    };

    scroll();

    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;
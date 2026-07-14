import { useEffect, useState } from 'react';

export const useScrollSpy = (ids: string[]) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (!ids.length) return;

    const observer = new IntersectionObserver(
      () => {
        const center = window.innerHeight / 2;

        let closestId = '';
        let closestDistance = Infinity;

        ids.forEach((id) => {
          const element = document.getElementById(id);

          if (!element) return;

          const rect = element.getBoundingClientRect();

          // Si la sección está completamente fuera de la pantalla la ignoramos
          if (rect.bottom < 0 || rect.top > window.innerHeight) {
            return;
          }

          const elementCenter = rect.top + rect.height / 2;
          const distance = Math.abs(center - elementCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestId = id;
          }
        });

        setActiveId(closestId);
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      }
    );

    ids.forEach((id) => {
      const section = document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
};
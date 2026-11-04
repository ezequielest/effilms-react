const origen = {
  lat: -38.0124284,
  lon: -57.565533,
  alt: 0,
};

export function gaussianToGeo(x: number, y: number, z: number) {
  // Transformación del plano horizontal
  const este = 146.366 * x - 290.802 * z;
  const norte = 76.057 * x + 180.647 * z;

  const latRad = (origen.lat * Math.PI) / 180;

  const lat = origen.lat + norte / 111320;
  const lon = origen.lon + este / (111320 * Math.cos(latRad));

  return {
    lat,
    lon,
    alt: y, // Pendiente de calibrar la escala vertical
  };
}

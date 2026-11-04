export type GeoCoordinate = {
  lat: number;
  lon: number;
  alt?: number;
};

export type LocalCoordinate = {
  x: number;
  y: number;
  z: number;
};

const EARTH_RADIUS = 6_378_137;

const toRadians = (degrees: number) => (degrees * Math.PI) / 180;

export function geoToLocal(point: GeoCoordinate, origin: GeoCoordinate): LocalCoordinate {
  const lat0 = toRadians(origin.lat);
  const lat = toRadians(point.lat);
  const lon0 = toRadians(origin.lon);
  const lon = toRadians(point.lon);

  const x = EARTH_RADIUS * (lon - lon0) * Math.cos(lat0);

  const z = -EARTH_RADIUS * (lat - lat0);

  const y = (point.alt ?? 0) - (origin.alt ?? 0);

  return { x, y, z };
}


interface GaussianPosition {
  x: number;
  z: number;
  eastMeters: number;
  northMeters: number;
}

const ORIGIN_LAT = -38.012358;
const ORIGIN_LON = -57.565810;

const ORIGIN_X = 0;
const ORIGIN_Z = 0.18;

const EARTH_RADIUS = 6378137;

export function gpsToGaussian(
  lat: number,
  lon: number
): GaussianPosition {

  const east =
    (lon - ORIGIN_LON) *
    Math.PI / 180 *
    EARTH_RADIUS *
    Math.cos(ORIGIN_LAT * Math.PI / 180);

  const north =
    (lat - ORIGIN_LAT) *
    Math.PI / 180 *
    EARTH_RADIUS;

  const x =
    ORIGIN_X +
    0.00366646 * east +
    0.00599796 * north;

  const z =
    ORIGIN_Z -
    0.00569356 * east +
    0.00371491 * north;

  return {
    x,
    z,
    eastMeters: east,
    northMeters: north
  };
}

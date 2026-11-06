export const PropertyServiceType = {
  VIDEO: "VIDEO",
  PHOTO: "PHOTO",
  DRONE: "DRONE",
} as const;

export type PropertyServiceType = (typeof PropertyServiceType)[keyof typeof PropertyServiceType];

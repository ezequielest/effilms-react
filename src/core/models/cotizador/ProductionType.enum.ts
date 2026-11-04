export const ProductionType = {
  PROPERTY: "PROPERTY",
  SPECIAL_PROJECT: "SPECIAL_PROJECT",
} as const;

export type ProductionType = (typeof ProductionType)[keyof typeof ProductionType];

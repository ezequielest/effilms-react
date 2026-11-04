export const PricingUnit = {
  M2: "M2",
  HA: "HA",
  UNIT: "UNIT",
} as const;

export type PricingUnit = (typeof PricingUnit)[keyof typeof PricingUnit];

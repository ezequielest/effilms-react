export const PricingModel = {
  PROPERTY_SIZE: "PROPERTY_SIZE",
  COVERAGE_AREA: "COVERAGE_AREA",
  FIXED: "FIXED",
  MANUAL: "MANUAL",
} as const;

export type PricingModel = (typeof PricingModel)[keyof typeof PricingModel];

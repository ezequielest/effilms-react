export const ContractType = {
  INDIVIDUAL: "INDIVIDUAL",
  FLEXIBLE: "FLEXIBLE",
  MONTHLY: "MONTHLY",
  PLAN_6M: "PLAN_6M",
} as const;

export type ContractType = (typeof ContractType)[keyof typeof ContractType];

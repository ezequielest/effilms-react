export const ADITIONALS = {
  DRON: "DRON",
  BROKER: "BROKER",
  MODEL: "MODEL",
  IA: "IA",
  CONTENT: "CONTENT",
} as const;

export type ADITIONALS = (typeof ADITIONALS)[keyof typeof ADITIONALS];

export const Aditionals = {
  DRON: "DRON",
  BROKER: "BROKER",
  MODEL: "MODEL",
  IA: "IA",
  CONTENT: "CONTENT",
} as const;

export type Aditionals = (typeof Aditionals)[keyof typeof Aditionals];

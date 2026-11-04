import type { ADITIONALS } from "./Aditionals.enum";

export interface IServiceExtra {
  type: ADITIONALS;
  price: number;
  hours?: number;
}

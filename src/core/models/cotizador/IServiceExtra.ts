import type { Aditionals } from "./Aditionals.enum";

export interface IServiceExtra {
  type: Aditionals;
  price: number;
  hours?: number;
}

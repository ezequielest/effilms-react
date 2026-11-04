import type { IPriceRange } from "./IPriceRange";
import type { PricingModel } from "./PricingModel.enum";
import type { PricingUnit } from "./PricingUnit.enum";

export interface IServicePricing {
  model: PricingModel;
  unit?: PricingUnit;
  ranges?: IPriceRange[];
  value?: number;
}

import type { IServiceLevel } from "./IServiceLevel";
import type { IServicePricing } from "./IServicePricing";
import type { PropertyServiceType } from "./PropertyServiceType.enum";

export interface IPropertyService {
  id: number;
  type: PropertyServiceType;
  title: string;
  description: string;
  usesLevels: boolean;
  levels?: IServiceLevel[];
  pricing?: IServicePricing;
}

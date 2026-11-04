import type { IServiceExtra } from "./IServiceExtra";
import type { IServicePricing } from "./IServicePricing";
import type { ServiceGroup } from "./ServiceGroup.enum";

export interface IServiceLevel {
  group: ServiceGroup;
  title?: string;
  description?: string;
  pricing: IServicePricing;
  extras: IServiceExtra[];
  hours: number;
  delivery: number;
  video?: string;
  isHighlighted?: boolean;
  isNew?: boolean;
}

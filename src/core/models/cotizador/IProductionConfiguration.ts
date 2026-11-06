import type { ADITIONALS } from "./Aditionals.enum";
import type { ContractType } from "./ContractType.enum";
import type { ProductionType } from "./ProductionType.enum";
import type { PropertyServiceType } from "./PropertyServiceType.enum";
import type { ServiceGroup } from "./ServiceGroup.enum";

export interface IProductionConfiguration {
  productionType: ProductionType;
  services: PropertyServiceType[];
  level?: ServiceGroup;
  propertySize?: number;
  coverageArea?: number;
  extras: ADITIONALS[];
  contract?: ContractType;
}

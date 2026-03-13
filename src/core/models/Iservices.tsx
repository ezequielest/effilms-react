
export interface IPrices {
    isBasePrise: boolean;
    maxM2: number;
    value: number;
}

export interface IAditionals {
    type: string;
    hours: number;
    price: number;
}

export interface IServices  {
    id: number;
    type: string;
    group: string;
    service: string;
    description: string;
    video: string;
    slider: string;
    discount: number;
    discountMontly: number;
    isBaseMontly: boolean;
    title: string;
    priceSince: number;
    prices: Array<IPrices>,
    aditionals: Array<IAditionals>,
    isHighlighted: boolean;
    isPromo: boolean;
    isNew: boolean;
    isVideo: boolean;
    hours: number;
    delivery: number
}

export interface IServicesSmall  {
    id: number;
    service: string;
    description: string;
    video: string;
    priceSince: number;
    isHighlighted: boolean;
    isPromo:boolean;
    discount: number;
}
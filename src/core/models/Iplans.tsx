
interface planDescription {
        description: string;
        class: string;
}

export interface Iplans {
        type: string;
        title: string;
        class: string,
        included: Array<planDescription>;
        hasPhoto: boolean;
        isHighlighted: boolean;
        value: number;
        saveCash: number;
        totalPercentDiscount: number;
        availablePlaces: number,
}
import { IPriceData } from "./priceCard";

export interface IExchange {
    name: string;
    isSelect: boolean;
    data?: IPriceData | null;
}

export type ExchangeContextType = {
    exchanges: IExchange[];
    toggleSelect: (name: string,isSelect: boolean) => void;
    data: [];
    fetchPrice: (name: string) => void;
};

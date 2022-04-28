import { IPriceCard } from "./priceCard";

export interface IExchange {
    name: string;
    isSelect: boolean;
    data: IPriceCard | null;
}

export type ExchangeContextType = {
    exchanges: IExchange[];
    toggleSelect: (name: string, isSelect: boolean) => void;
    data: [];
    fetchPrice: (name: string) => void;
};

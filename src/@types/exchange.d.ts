export interface IExchange {
    name: string;
    isSelect: boolean;
}

export type ExchangeContextType = {
    exchanges: IExchange[];
    toggleSelect: (name: string,isSelect: boolean) => void;
};

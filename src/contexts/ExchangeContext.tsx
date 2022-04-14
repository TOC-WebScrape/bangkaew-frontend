/** 
 * Provide Context of selected exchange for fetching price
 * 
 * @param exchanges - List of available exchange { name, isSelect }
 * @param toggleSelect - pass name of exchange for toggle select state each exchange
 * 
 * @author SnapM (Jame)
 */

import React, { createContext, useState } from "react";
import { ExchangeContextType, IExchange } from "../@types/exchange";

export const ExchangeContext = createContext<ExchangeContextType | null>(null);

const InitExchange: IExchange[] = [
    {
        name: "Binance",
        isSelect: true,
    },
    {
        name: "Bitfinex",
        isSelect: true,
    },
    {
        name: "Coinbase",
        isSelect: true,
    },
    {
        name: "Coinsbit",
        isSelect: true,
    },
    {
        name: "eToroX",
        isSelect: true,
    },
    {
        name: "FTX",
        isSelect: true,
    },
    {
        name: "Gateio",
        isSelect: true,
    },
    {
        name: "Kucoin",
        isSelect: true,
    },
];

const ExchangeProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [exchanges, setExchanges] = useState<IExchange[]>(InitExchange);

    const toggleSelect = (name: string) => {
        exchanges.filter((exchange: IExchange) => {
            if (exchange.name === name) {
                exchange.isSelect = !exchange.isSelect;
                // Why Error!! I can't update exchange to exchanges
                // setExchanges([...exchange])
            }
        });
    };

    return (
        <ExchangeContext.Provider value={{ exchanges, toggleSelect }}>
            {children}
        </ExchangeContext.Provider>
    );
};

export default ExchangeProvider;

// Ref : https://blog.logrocket.com/how-to-use-react-context-typescript/

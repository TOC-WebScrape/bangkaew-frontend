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
import exchangeService from "../services/exchange.service";
import {
    AbstractFormatter,
    BinanceFormatter,
    BitMartFormatter,
    GateIoFormatter,
    KuCoinFormatter,
} from "../services/formatter.service";

export const ExchangeContext = createContext<ExchangeContextType | null>(null);

const InitExchange: IExchange[] = [
    {
        name: "Binance",
        isSelect: true,
        data: null,
    },
    {
        name: "Gateio",
        isSelect: true,
        data: null,
    },
    {
        name: "Kucoin",
        isSelect: true,
        data: null,
    },
    {
        name: "BitMart",
        isSelect: true,
        data: null,
    },
];

export const ExchangeProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [exchanges, setExchanges] = useState<IExchange[]>(InitExchange);
    const [data, setData] = useState<any>([]);
    /**
     * @dev fetchPrice will fetch price data from backend
     * and update to data state for provide to every conponent in project
     * by React.useContext
     *
     * @param name The name of cryptocurrency for fetch price data.
     */
    const fetchPrice = (name: string) => {
        exchangeService.currency(name).then((res: any) => {
            const newData = exchanges;

            const biFormatter: AbstractFormatter = new BinanceFormatter(
                res.data["bn"]
            );
            newData[0].data = biFormatter.getFormattedData();

            const bmFormatter: AbstractFormatter = new BitMartFormatter(
                res.data["bm"]
            );
            newData[3].data = bmFormatter.getFormattedData();

            const gaFormatter: AbstractFormatter = new GateIoFormatter(
                res.data["g"]
            );
            newData[1].data = gaFormatter.getFormattedData();

            const kuFormatter: AbstractFormatter = new KuCoinFormatter(
                res.data["kc"]
            );
            newData[2].data = kuFormatter.getFormattedData();

            setExchanges([...newData]);
        });
    };

    const toggleSelect = (name: string, isSelect: boolean) => {
        exchanges.filter((exchange: IExchange) => {
            if (exchange.name === name) {
                exchange.isSelect = !exchange.isSelect;
            }
            setExchanges([...exchanges]);
        });
        console.log(...exchanges);
    };

    return (
        <ExchangeContext.Provider
            value={{ exchanges, toggleSelect, data, fetchPrice }}
        >
            {children}
        </ExchangeContext.Provider>
    );
};

export default ExchangeProvider;

// Ref : https://blog.logrocket.com/how-to-use-react-context-typescript/

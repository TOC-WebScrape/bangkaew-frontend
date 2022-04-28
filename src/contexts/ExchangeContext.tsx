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
    name: "Gateio",
    isSelect: true,
  },
  {
    name: "Kucoin",
    isSelect: true,
  },
  {
    name: "BitMart",
    isSelect: true,
  },
];

export const ExchangeProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [exchanges, setExchanges] = useState<IExchange[]>(InitExchange);

  const toggleSelect = (name: string, isSelect: boolean) => {
    exchanges.filter((exchange: IExchange) => {
      if (exchange.name === name) {
        exchange.isSelect = !exchange.isSelect;
        //setExchanges({ ...exchanges, [name]: false});
        // Why Error!! I can't update exchange to exchanges
        // setExchanges([...exchange])
      }
      setExchanges([...exchanges]);
    });
    console.log(...exchanges);
    // dont know how tf this works... but it works
    // check the result in console
    // (accidentally) ; Bean
  };

  return (
    <ExchangeContext.Provider value={{ exchanges, toggleSelect }}>
      {children}
    </ExchangeContext.Provider>
  );
};

export default ExchangeProvider;

// Ref : https://blog.logrocket.com/how-to-use-react-context-typescript/

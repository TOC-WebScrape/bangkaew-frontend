import { IPriceCard } from "../@types/priceCard";
import {
  BINANCE_ICON,
  BITMART_ICON,
  GATEIO_ICON,
  KUCOIN_ICON,
} from "../assets/icons";

export abstract class AbstractFormatter {
  protected data: any;

  constructor(data: any) {
    this.data = data;
  }

  /*
    Convert IPriceCard to this format
    {
      currentPrice: 12,345.123,
      percentChange: 1.23,
      rateStatus: true,
      imageUrl: BINANCE_ICON,
      highestPrice: 12,345.12,
      lowestPrice: 12,345.12,
      volume: 1234.12,
    }
    */
  abstract getFormattedData(): IPriceCard | null;
}

export class BinanceFormatter extends AbstractFormatter {
    /*
    "price": {
    "BTC/USDT": "39,699.56"
    },
    "change": {
    "BTC/USDT": "+1.64"
    },
    "high_low": {
    "BTC/USDT": "39,788.53/ 38,435.94"
    },
    "volume": {
    "BTC/USDT": "2,073.40M"
    },
    "marketcap": {
    "BTC/USDT": "$755,262.77M"
    }
    */

  getFormattedData(): IPriceCard | null {
    try {
      let { price, change, high_low, volume } = this.data;
      const name = Object.keys(price)[0]; //get first crypto name

      if (name === null) {
        return null;
      }

      const result: IPriceCard = {
        currentPrice: price[name],
        percentChange: change[name].slice(1),
        rateStatus: change[name][0] === "+",
        imageUrl: BINANCE_ICON,
        highestPrice: high_low[name].split("/")[0].replace(/\s/g, ""),
        lowestPrice: high_low[name].split("/")[1].replace(/\s/g, ""),
        volume: volume[name],
      };

      return result;
    } catch (e) {
      return null;
    }
  }
}
export class BitMartFormatter extends AbstractFormatter {
     /*
    "price": {
    "BTC/USDT": "39,699.56"
    },
    "change": {
    "BTC/USDT": "-1.64 %"
    },
    "high_low": {
    "BTC/USDT": "39,788.53 / 38,435.94"
    },
    "volume": {
    "BTC/USDT": "2,073.40M"
    },
    "marketcap": {
    "BTC/USDT": "$755,262.77M"
    }
    */

    getFormattedData(): IPriceCard | null {
      try {
        let { price, change, high_low, volume } = this.data;
        const name = Object.keys(price)[0]; //get first crypto name
  
        if (name === null) {
          return null;
        }
  
        const result: IPriceCard = {
          currentPrice: price[name],
          percentChange: change[name].slice(1, change[name].length-2),
          rateStatus: change[name][0] !== "-",
          imageUrl: BINANCE_ICON,
          highestPrice: high_low[name].split("/")[0].replace(/\s/g, ""),
          lowestPrice: high_low[name].split("/")[1].replace(/\s/g, ""),
          volume: volume[name],
        };
  
        return result;
      } catch (e) {
        return null;
      }
    }
}
export class GateIoFormatter extends AbstractFormatter {
  /*
    "price": {
    "BTC/USDT": "39,699.56"
    },
    "change": {
    "BTC/USDT": "+1.64"
    },
    "high_low": {
    "BTC/USDT": "39,788.53/ 38,435.94"
    },
    "volume": {
    "BTC/USDT": "$2,073.40M"
    },
    "marketcap": {
    "BTC/USDT": "$755,262.77M"
    }
    */

    getFormattedData(): IPriceCard | null {
      try {
        let { price, change, high_low, volume } = this.data;
        const name = Object.keys(price)[0]; //get first crypto name
  
        if (name === null) {
          return null;
        }
  
        const result: IPriceCard = {
          currentPrice: price[name],
          percentChange: change[name].slice(1),
          rateStatus: change[name][0] === "+",
          imageUrl: BINANCE_ICON,
          highestPrice: high_low[name].split("/")[0].replace(/\s/g, ""),
          lowestPrice: high_low[name].split("/")[1].replace(/\s/g, ""),
          volume: volume[name].slice(1),
        };
  
        return result;
      } catch (e) {
        return null;
      }
    }
}
export class KuCoinFormatter extends AbstractFormatter {
  /*
    "price": {
      "BTC/USDT": "39,771.3"
    },
    "change": {
      "BTC/USDT": "+1.97%"
    },
    "high_low": {
      "BTC/USDT": null//kucoin has no high_low
    },
    "volume": {
      "BTC/USDT": "377,900,761.3"
    },
    "marketcap": {
      "BTC/USDT": "9,654.63429632"
    }
    */
  getFormattedData(): IPriceCard | null {
    try {
      let { price, change, high_low, volume } = this.data;
      const name = Object.keys(price)[0]; //get first crypto name

      if (name === null) {
        return null;
      }
      return {
        currentPrice: price[name],
        percentChange: change[name].slice(1, change[name].length - 1),
        rateStatus: change[name][0] === "+",
        imageUrl: KUCOIN_ICON,
        highestPrice: "-",
        lowestPrice: "-",
        volume: volume[name],
      };
    } catch (e) {
      return null;
    }
  }
}

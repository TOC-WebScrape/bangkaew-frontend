import { IPriceCard } from "../@types/priceCard";
import { BINANCE_ICON, BITMART_ICON, GATEIO_ICON, KUCOIN_ICON, TradingIcons } from "../assets/icons";
/*
export interface IPriceCard {
  imageUrl: string;
  currentPrice: string | number;
  percentChange: string | number;
  highestPrice: string | number;
  lowestPrice: string | number;
  volume: string | number;
  rateStatus: boolean;
}
*/
export abstract class AbstractFormatter{
    protected data: any;

    constructor(data:any){
        this.data = data;
    }

    abstract getFormattedData(): IPriceCard | null;
}

export class BinanceFormatter extends AbstractFormatter{
    getFormattedData(): IPriceCard | null {

        /*
        "price": {
        "BTC/USDT": "39,699.56/ $39,699.56"
        },
        "change": {
        "BTC/USDT": "+1.64%"
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

        try{
            let {price, change, high_low, volume } = this.data;
            const name = Object.keys(price)[0];//get first crypto name
    
            if(name === null){
                return null;
            }
    
            const result:IPriceCard = {
                currentPrice: price[name].split(" ")[1].slice(1),
                percentChange: change[name].slice(1, change[name].length-1),
                rateStatus: change[name][0]==='+',
                imageUrl: BINANCE_ICON,
                highestPrice: high_low[name].split('/')[0].replace(/\s/g, ''),
                lowestPrice: high_low[name].split('/')[1].replace(/\s/g, ''),
                volume: volume[name],
            };
    
            return result;
        }
        catch(e){
            return null;
        }
        
    }
}
export class BitMartFormatter extends AbstractFormatter{
    /*
    "price": {
      "BTC/USDT": "39,710.94/ 39,709.62 USD",
      "BTC/USDC": "39,701.36/ 39,700.04 USD",
      "BTC/USDP": "39,624.89/ 39,615.65 USD",
      "WBTC/USDT": "39,737.91/ 39,736.59 USD"
    },
    "change": {
      "BTC/USDT": "1.66 %",
      "BTC/USDC": "-1.64 %",
    },
    "high_low": {
      "BTC/USDT": "39,767.31/38,437.08",
      "BTC/USDC": "39,751.44/38,440.04",
    },
    "volume": {
      "BTC/USDT": "614,012,478.30 USDT",
      "BTC/USDC": "67,952,618.14 USDC",
    },
    "marketcap": {
      "BTC/USDT": null,
      "BTC/USDC": null,
    }
    */
    getFormattedData(): IPriceCard| null {
        try{
            let {price, change, high_low, volume } = this.data;
            const name = Object.keys(price)[0];//get first crypto name
            if(name === null){
                return null;
            }
            return {
                currentPrice: price[name].split(" ")[1],
                percentChange: change[name].slice(change[name][0]==='-' ? 1:0, change[name].length-2),
                rateStatus: change[name][0]!=='-',
                imageUrl: BITMART_ICON,
                highestPrice: high_low[name].split('/')[0],
                lowestPrice: high_low[name].split('/')[1],
                volume: volume[name].split(" ")[0],
            };
        }
        catch(e){
            return null;
        }
        
    }
}
export class GateIoFormatter extends AbstractFormatter{
    /*
    "price": {
      "BTC/ Bitcoin ": 39684.07,
      "BTC/Bitcoin": 39682.13,
    },
    "change": {
      "BTC/ Bitcoin ": "+1.70 %",
      "BTC/Bitcoin": "+1.80 %",
    },
    "high_low": {
      "BTC/ Bitcoin ": "39780/38440.01",
      "BTC/Bitcoin": "39787.54/38469.28",
    },
    "volume": {
      "BTC/ Bitcoin ": "143,122,228.79",
      "BTC/Bitcoin": "9,474,386.32",
    },
    "marketcap": {
      "BTC/ Bitcoin ": "$754,960,383,011",
      "BTC/Bitcoin": "$754,923,475,931",
    }
    */
    getFormattedData(): IPriceCard| null {
        try{
            let {price, change, high_low, volume } = this.data;
            const name = Object.keys(price)[0];//get first crypto name
            if(name === null){
                return null;
            }
            return {
                currentPrice: price[name],
                percentChange: change[name].slice(1, change[name].length-2),
                rateStatus: change[name][0]==='+',
                imageUrl: GATEIO_ICON,
                highestPrice: high_low[name].split('/')[0],
                lowestPrice: high_low[name].split('/')[1],
                volume: volume[name],
            };
        }
        catch(e){
            return null;
        }
    }
}
export class KuCoinFormatter extends AbstractFormatter{
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
    getFormattedData(): IPriceCard| null {
        try{
            let {price, change, high_low, volume } = this.data;
            const name = Object.keys(price)[0];//get first crypto name
    
            
            if(name === null){
                return null;
            }
            return {
                currentPrice: price[name],
                percentChange: change[name].slice(1, change[name].length-1),
                rateStatus: change[name][0]==='+',
                imageUrl: KUCOIN_ICON,
                highestPrice: '-',
                lowestPrice: '-',
                volume: volume[name],
            };
        }
        catch(e){
            return null;
        }
    }
}
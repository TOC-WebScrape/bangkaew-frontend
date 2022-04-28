export interface IPriceCard {
  imageUrl: string;
  currentPrice: string | number;
  percentChange: string | number;
  highestPrice: string | number;
  lowestPrice: string | number;
  volume: string | number;
  rateStatus: boolean;
}

export interface IPriceExchange {
  name:string;
  imageUrl: string;
  coins:[];
}

export interface IPriceData {
  name: string;
  price: string;
  change: string;
  high_low: string;
  volume: string;
  marketcap: string;
}

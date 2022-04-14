export interface IPriceCard {
  imageUrl: string;
  currentPrice: string | number;
  percentChange: string | number;
  highestPrice: string | number;
  lowestPrice: string | number;
  volume: string | number;
}

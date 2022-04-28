import { SearchBox, WebSelectBar } from ".";
import { Box, Paper } from "@mui/material";
import ExchangeCard from "./ExchangeCard";
import { EXCHANGE_CARD } from "../MockData";
import { BINANCE_ICON, TradingIcons } from "../assets/icons";
import { useEffect } from "react";

interface SearchPageProps {}
const SearchPage: React.FC<SearchPageProps> = ({}: SearchPageProps) => {
  const data = EXCHANGE_CARD;

  useEffect(() => {
    setInterval(() => {
      //TODO: implement fetching exchange card data
    }, 10000);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <SearchBox />
      <WebSelectBar />
      <Paper className='flex flex-wrap justify-center'>
        {TradingIcons.map(({ name, icon, rateStatus}) => {
        return (
          <ExchangeCard
            currentPrice={data.currentPrice}
            highestPrice={data.highestPrice}
            // imageUrl={data.imageUrl}
            imageUrl={icon}
            lowestPrice={data.lowestPrice}
            percentChange={data.percentChange}
            volume={data.volume}
            key={name}
            rateStatus={rateStatus}
          />
        );})}
      </Paper>
      
    </div>
  );
};

export default SearchPage;

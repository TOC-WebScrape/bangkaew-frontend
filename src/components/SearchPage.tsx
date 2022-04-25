import { SearchBox, WebSelectBar } from ".";
import { Box } from "@mui/material";
import ExchangeCard from "./ExchangeCard";
import { EXCHANGE_CARD } from "../MockData";
import { BINANCE_ICON } from "../assets/icons";

interface SearchPageProps {}

const SearchPage: React.FC<SearchPageProps> = ({}: SearchPageProps) => {
  const data = EXCHANGE_CARD;

  return (
    <div>
      <SearchBox />
      <WebSelectBar />
      <ExchangeCard
        currentPrice={data.currentPrice}
        highestPrice={data.highestPrice}
        imageUrl={BINANCE_ICON}
        lowestPrice={data.lowestPrice}
        percentChange={data.percentChange}
        volume={data.volume}
      />
    </div>
  );
};

export default SearchPage;
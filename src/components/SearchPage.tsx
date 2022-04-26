import { SearchBox, WebSelectBar } from ".";
import { Box } from "@mui/material";
import ExchangeCard from "./ExchangeCard";
import { EXCHANGE_CARD } from "../MockData";
import { BINANCE_ICON } from "../assets/icons";
import { useEffect } from "react";

interface SearchPageProps {}

const SearchPage: React.FC<SearchPageProps> = ({}: SearchPageProps) => {
  const data = EXCHANGE_CARD;
  const socket = new WebSocket("wss://ws.postman-echo.com/raw"); //fix this

  useEffect(() => {
    setTimeout(() => {
      socket.onopen = (e) => console.log("connected");

      socket.onmessage = (e) => console.log(e.data);

      setTimeout(() => {
        socket.send("Hello server");
      }, 1000);
    }, 2000);
  }, []);

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

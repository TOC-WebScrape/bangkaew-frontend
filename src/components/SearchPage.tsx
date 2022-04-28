import { SearchBox, WebSelectBar } from ".";
import { Box, Paper } from "@mui/material";
import ExchangeCard from "./ExchangeCard";
import { EXCHANGE_CARD } from "../MockData";
import { BINANCE_ICON, TradingIcons } from "../assets/icons";
import { useEffect, useContext } from "react";
import { ExchangeContext } from "../contexts/ExchangeContext";
import { ExchangeContextType } from "../@types/exchange";

interface SearchPageProps {}
const SearchPage: React.FC<SearchPageProps> = ({}: SearchPageProps) => {
    const data = EXCHANGE_CARD;

    useEffect(() => {
        setInterval(() => {
            //TODO: implement fetching exchange card data
        }, 10000);
    }, []);

    const { exchanges } = useContext(ExchangeContext) as ExchangeContextType;

    return (
        <div className="flex flex-col items-center">
            <SearchBox />
            <WebSelectBar />
            <Paper className="flex flex-wrap justify-center w-full">
                {exchanges.map(({ data, isSelect }, index) => {
                    if (data && isSelect) {
                        return (
                            <ExchangeCard
                                currentPrice={data.currentPrice}
                                highestPrice={data.highestPrice}
                                // imageUrl={data.imageUrl}
                                imageUrl={data.imageUrl}
                                lowestPrice={data.lowestPrice}
                                percentChange={data.percentChange}
                                volume={data.volume}
                                rateStatus={data.rateStatus}
                                key={index}
                            />
                        );
                    }
                })}
            </Paper>
        </div>
    );
};

export default SearchPage;

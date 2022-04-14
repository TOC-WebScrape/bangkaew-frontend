//XXX: Korn, exchange card
import {
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    makeStyles,
} from "@mui/material";
import Card from "@mui/material/Card";
import { IPriceCard } from "../@types/priceCard";

const ExchangeCard: React.FC<IPriceCard> = ({
    imageUrl,
    currentPrice,
    percentChange,
    highestPrice,
    lowestPrice,
    volume,
}: IPriceCard) => {
    return (
        <div
            style={{
                display: "flex",
                width: 400,
                height: 100,
                alignItems: "center",
                padding: 10,
                justifyContent: "space-between",
            }}
        >
            <img src={imageUrl} alt="EXCHANGE" />
            <div>{currentPrice}$</div>
            <div>
                {percentChange >= 0 ? <div>UP ICON</div> : <div>DOWN ICON</div>}
                {percentChange}
            </div>
            <div>
                {highestPrice}
                <div
                    style={{
                        display: "flex",
                        width: "100%",
                        height: 1,
                        backgroundColor: "black",
                    }}
                ></div>
                {lowestPrice}
            </div>
            <div>{volume}$</div>
        </div>
    );
};

export default ExchangeCard;

//XXX: Korn, exchange card
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  makeStyles,
} from "@mui/material";
import { BINANCE_ICON } from "../assets/icons";
import Card from "@mui/material/Card";

interface ExchangeCardProps {
  imageUrl: string;
  currentPrice: string | number;
  percentChange: string | number;
  highestPrice: string | number;
  lowestPrice: string | number;
  volume: string | number;
}

const ExchangeCard: React.FC<ExchangeCardProps> = ({
  imageUrl,
  currentPrice,
  percentChange,
  highestPrice,
  lowestPrice,
  volume,
}: ExchangeCardProps) => {
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

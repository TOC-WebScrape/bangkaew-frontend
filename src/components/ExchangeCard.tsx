//XXX: Korn, exchange card
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

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
    <div>
      <img src={imageUrl} alt='EXCHANGE' />
      <div>{currentPrice}$</div>
      <div>
        {percentChange >= 0 ? <div>UP ICON</div> : <div>DOWN ICON</div>}
        {percentChange}
      </div>
      <div>
        {highestPrice}
        <div>----------</div>
        {lowestPrice}
      </div>
      <div>{volume}$</div>
    </div>
  );
};

export default ExchangeCard;

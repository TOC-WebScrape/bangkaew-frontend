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
    <div className='flex items-center justify-between w-96 h-28 border-solid bg-red p-2.5'>
      <img src={imageUrl} alt='EXCHANGE' />
      <div>{currentPrice}$</div>
      <div>
        {percentChange >= 0 ? <div>UP ICON</div> : <div>DOWN ICON</div>}
        {percentChange}
      </div>
      <div>
        {highestPrice}
        <div className='flex w-full h-px bg-black'></div>
        {lowestPrice}
      </div>
      <div>{volume}$</div>
    </div>
  );
};

export default ExchangeCard;

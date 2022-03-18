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
    <div className='flex flex-row bg-green-200 rounded-xl justify-center items-center'>
      <img src={imageUrl} alt='EXCHANGE' className='rounded-full h-16 ' />
      <div>{currentPrice}$</div>
      <div className='flex flex-col'>
        {percentChange >= 0 ? (
          <div className='order-first'>UP ICON</div>
        ) : (
          <div className='order-last'>DOWN ICON</div>
        )}
        {percentChange}
      </div>
      <div className='flex flex-col justify-center items-center'>
        {highestPrice}
        <div>----------</div>
        {lowestPrice}
      </div>
      <div>{volume}$</div>
    </div>
  );
};

export default ExchangeCard;

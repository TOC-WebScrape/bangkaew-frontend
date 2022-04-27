//XXX: Korn, exchange card
import {
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  makeStyles,
  Paper,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Card from '@mui/material/Card';
import { IPriceCard } from '../@types/priceCard';
import { borderColor, Box, height } from '@mui/system';

const ExchangeCard: React.FC<IPriceCard> = ({
  imageUrl,
  currentPrice,
  percentChange,
  highestPrice,
  lowestPrice,
  volume,
  rateStatus,
}: IPriceCard) => {
  // return (
  //   <div className='flex items-center justify-between w-96 h-20 border-solid border-red-500 bg-red p-2.5'>
  //     <img src={imageUrl} className='h-20 w-auto' alt='EXCHANGE' />
  //     <div>{currentPrice}$</div>
  //     <div>
  //       {percentChange >= 0 ? <div>UP ICON</div> : <div>DOWN ICON</div>}
  //       {percentChange}
  //     </div>
  //     <div>
  //       {highestPrice}
  //       <div className='flex w-full h-px bg-black'></div>
  //       {lowestPrice}
  //     </div>
  //     <div>{volume}$</div>
  //   </div>
  // );

  // Bean's card
  return (
    <Card
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        maxWidth: 0.4,
        width: 0.4,
        border: 2,
        borderRadius: 3,
        margin: 2,
        boxShadow: 2,
      }}
    >
      <CardMedia
        component={'img'}
        alt='coin name'
        height={'140'}
        image={imageUrl}
        sx={{ height: 100, width: 'auto', margin: 2 }}
      />
      {/* <CardContent sx={{}}>
        <Typography
          variant={'h5'}
          component={'div'}
          sx={{ border: 1, display: 'flex', textAlign: 'center' }}
        >
          {currentPrice}$
        </Typography>
      </CardContent> */}
      <Stack direction={'row'} gap={6} sx={{ mx: 4 }}>
        {/* currentPrice */}
        <Typography
          variant={'h5'}
          component={'div'}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          {currentPrice}$
        </Typography>

        {/* percentChange */}
        {rateStatus ? (
          <Stack sx={{ justifyContent: 'center',}}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <SvgIcon sx={{ color: '#21BF73' }} component={ArrowDropUpIcon} />
            </Box>
            <Typography
              variant={'h5'}
              component={'div'}
              color='#21BF73'
              sx={{
                display: 'flex',
                textAlign: 'center',
                mb: 3,
                color: '#21BF73',
              }}
            >
              {percentChange}%
            </Typography>
          </Stack>
        ) : (
          <Stack sx={{ justifyContent: 'center',}}>
            <Typography
              variant={'h5'}
              component={'div'}
              sx={{
                display: 'flex',
                textAlign: 'center',
                mt: 3,
                color: '#FA4659',
              }}
            >
              {percentChange}%
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <SvgIcon sx={{ color: '#FA4659' }} component={ArrowDropDownIcon}
              />
            </Box>
          </Stack>
        )}

        {/* highest/lowest price */}
        <Stack
          sx={{
            width: 100,
            justifyContent: 'center',
            alignItems: 'center',
            
          }}
        >
          <Typography
            variant={'h5'}
            component={'div'}
            sx={{  display: 'flex', alignItems: 'center', my: 0.5 }}
          >
            {highestPrice}$
          </Typography>
          <Box sx={{ border: 1, width: 100 }}></Box>
          <Typography
            variant={'h5'}
            component={'div'}
            sx={{  display: 'flex', alignItems: 'center', my: 0.5 }}
          >
            {lowestPrice}$
          </Typography>
        </Stack>

        {/* volume */}
        <Typography
          variant={'h5'}
          component={'div'}
          sx={{  display: 'flex', alignItems: 'center', my: 0.5 }}
        >
          {volume}$
        </Typography>
      </Stack>
    </Card>
  );
};

export default ExchangeCard;

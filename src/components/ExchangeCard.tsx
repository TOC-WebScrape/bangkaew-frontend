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
  rateStatus
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
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
        flexGrow:1,
        maxWidth: 0.7,
        maxHeight: 200,
        border: 2,
        borderRadius: 3,
        margin: 1,
        boxShadow: 2,
      }}
    >
      <CardMedia
        component={'img'}
        image={imageUrl}
        sx={{
          height: 0.8,
          width: 'auto',
          ml: 5,
          my: 2,
          mr: 4
        }}
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
      <Stack direction={'row'} gap={10} sx={{ ml:5, alignItems: 'top',justifyContent:'right' }}>
        {/* currentPrice */}
        <Stack sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography
            component={'div'}
            sx={{ display: 'flex', alignItems: 'center', fontSize: 20 }}
          >
            CURRENT PRIZE
          </Typography>
          <Typography
            variant={'h5'}
            component={'div'}
            sx={{ display: 'flex', alignItems: 'center', mt: 1 }}
          >
            {currentPrice}$
          </Typography>
        </Stack>

        {/* percentChange */}
        <Stack sx={{ display: 'flex', alignItems: 'center', gap: 0 }}>
          <Typography
            component={'div'}
            sx={{ display: 'flex', alignItems: 'center', fontSize: 20 }}
          >
            CHANGE RATE
          </Typography>
          {rateStatus ? (
            <Stack sx={{ justifyContent: 'center', mt: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <SvgIcon
                  sx={{ color: '#21BF73' }}
                  component={ArrowDropUpIcon}
                />
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
            <Stack sx={{ justifyContent: 'center', mb: 2 }}>
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
                <SvgIcon
                  sx={{ color: '#FA4659' }}
                  component={ArrowDropDownIcon}
                />
              </Box>
            </Stack>
          )}
        </Stack>

        {/* highest/lowest price */}
        <Stack
          sx={{
            justifyContent: 'top',
            alignItems: 'center',
          }}
        >
          <Typography
            component={'div'}
            sx={{ display: 'flex', alignItems: 'center', fontSize: 20, mb: 1 }}
          >
            MAX/MIN PRIZE
          </Typography>
          <Typography
            variant={'h5'}
            component={'div'}
            sx={{ display: 'flex', alignItems: 'center', my: 0.5 }}
          >
            {highestPrice}$
          </Typography>
          <Box sx={{ border: 1, width: 100 }}></Box>
          <Typography
            variant={'h5'}
            component={'div'}
            sx={{ display: 'flex', alignItems: 'center', my: 0.5 }}
          >
            {lowestPrice}$
          </Typography>
        </Stack>

        {/* volume */}
        <Stack
          sx={{
            justifyContent: 'top',
            alignItems: 'left',
            display:'flex',
          }}
        >
          <Typography
            component={'div'}
            sx={{ display: 'flex', fontSize: 20, mb: 3 }}
          >
            VOLUME
          </Typography>
          <Typography
            variant={'h5'}
            component={'div'}
            sx={{ display: 'flex', alignItems: 'center',}}
          >
            {volume}$
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ExchangeCard;

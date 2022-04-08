import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

interface SearchBoxProps {}
const SearchBox: React.FC<SearchBoxProps> = ({}: SearchBoxProps) => {
  const suggestionCurrency = [
    'Ethereum (ETH)',
    'Litecoin (LTC)',
    'Cardano (ADA)',
    'Polkadot (DOT)',
    'Bitcoin Cash (BCH)',
    'Stellar (XLM)',
    'Dogecoin (DOGE)',
    'Binance Coin (BNB)',
  ];
  const [searchInput, setSearchInput] = React.useState('');
  const handleSearchInputChange = (e: any) => {
    setSearchInput(e.target.value);
  };
  const keyPress = (e: any) => {
    if (e.key === 'Enter') {
      setSearchInput(e.target.value);
      console.log(searchInput);
    }
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography sx={{ py: 2 }}>Cryptocurrency Symbol</Typography>
      <Autocomplete
        sx={{ width: 900 }}
        id='currency-search'
        freeSolo
        options={suggestionCurrency}
        onChange={(event, value) => setSearchInput(String(value))}
        renderInput={(params) => (
          <TextField
            {...params}
            label='Search Cryptocurrency'
            value={searchInput}
            onChange={handleSearchInputChange}
            onKeyDown={keyPress}
          />
        )}
      />
    </Box>
  );
};

export default SearchBox;

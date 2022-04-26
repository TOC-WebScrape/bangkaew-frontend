import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import { SvgIcon, Typography, Button, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBoxProps {}
const SearchBox: React.FC<SearchBoxProps> = ({}: SearchBoxProps) => {
  //TODO: Fetch from backend (or hard-coded): fetch suggestion from backend when string change (/api/suggest)
  const suggestionCurrency = [
    "Ethereum (ETH)",
    "Litecoin (LTC)",
    "Cardano (ADA)",
    "Polkadot (DOT)",
    "Bitcoin Cash (BCH)",
    "Stellar (XLM)",
    "Dogecoin (DOGE)",
    "Binance Coin (BNB)",
  ];

  //TODO: Validate that the crypto name is in suggestionCurrency before submit

  const [searchInput, setSearchInput] = React.useState("");
  const handleSearchInputChange = (e: any) => {
    setSearchInput(e.target.value);
  };
  const keyPress = (e: any) => {
    if (e.key === "Enter") {
      //setSearchInput(e.target.value);
      console.log(searchInput);
      //TODO: GET data from backend: api/crypto/{name}?cex=bi,ga,ku,bi
      //TODO: If all cex is not selected, alert the user (don't fetch)
    }
  };
  const handleSearchButtonClick = (e: any) => {
    console.log(searchInput);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography sx={{ py: 2 }}>Cryptocurrency Symbol</Typography>
      <Box
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Autocomplete
          sx={{ width: 900, display: "inline-block" }}
          id='currency-search'
          freeSolo
          options={suggestionCurrency}
          onInputChange={(event, value) => {
            setSearchInput(String(value));
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label='Search Cryptocurrency'
              value={searchInput}
              onKeyDown={keyPress}
            />
          )}
        />
        <IconButton
          onClick={handleSearchButtonClick}
          sx={{
            borderStyle: "solid",
            borderBlockColor: "black",
            display: "inline-block",
          }}
        >
          <SvgIcon component={SearchIcon} sx={{ width: 50, height: 40 }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SearchBox;

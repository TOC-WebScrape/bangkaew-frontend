import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import { SvgIcon, Typography, Button, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { CryptoList, CryptoNameMap } from "../utils/CryptoInfo";
import exchangeService from "../services/exchange.service";
import { ExchangeContext } from "../contexts/ExchangeContext";
import { ExchangeContextType } from "../@types/exchange";
import axios from "axios";

interface SearchBoxProps {}
const SearchBox: React.FC<SearchBoxProps> = ({}: SearchBoxProps) => {
    //TODO: Validate that the crypto name is in suggestionCurrency before submit
    const [searchInput, setSearchInput] = React.useState("");
    const [suggestList, setSuggestList] = React.useState([]);

    React.useEffect(() =>{
        fetchSuggest();
    },[])


    const { fetchPrice } = React.useContext(
        ExchangeContext
    ) as ExchangeContextType;

    const handleSearchInputChange = (value: string) => {
        setSearchInput(value);
    };

    /**
     * @dev keyPress will call fetchSuggest every key strokes.
     */
    const keyPress = (e: any) => {
        console.log(e.target.value);
        // fetchSuggest();
        if (e.key === "Enter") {
            //setSearchInput(e.target.value);
            console.log(searchInput);
            //TODO: GET data from backend: api/crypto/{name}?cex=bi,ga,ku,bi
            //TODO: If all cex is not selected, alert the user (don't fetch)
        }
    };

    /**
     * @dev handelSearchButton is update data on Exchange context for show in
     * SearchPage component.
     */
    const handleSearchButtonClick = (e: any) => {
        console.log(searchInput);
        fetchPrice(searchInput);
    };

    //TODO: Fetch from backend (or hard-coded): fetch suggestion from backend when string change (/api/suggest)

    /**
     * @dev fetchSuggest will fetch suggest data from backend and
     * update to suggestList state for update Autocomplete {option} component
     *
     * But now! option can't update with state.
     */
    const fetchSuggest = () => {
        exchangeService.suggest().then((result) => {
            console.log(result.data.result);
            setSuggestList(result.data.result);
        });
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
        <Typography sx={{ py: 2, fontSize: 50, fontWeight: 'bold' }}>
          Cryptocurrency Symbol
        </Typography>
        {/* <h1>{searchInput}</h1> */}
        <Box
          sx={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
          }}
        >
          <Autocomplete
            sx={{ width: 900, display: 'inline-block' }}
            id='currency-search'
            freeSolo
            options={suggestList}
            onInputChange={(event, value) => {
              handleSearchInputChange(value);
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
              borderStyle: 'solid',
              borderBlockColor: 'black',
              display: 'inline-block',
            }}
          >
            <SvgIcon component={SearchIcon} sx={{ width: 50, height: 40 }} />
          </IconButton>
        </Box>
      </Box>
    );
};

export default SearchBox;

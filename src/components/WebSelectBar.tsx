import React, { useContext } from "react";
import {
  Typography,
  Paper,
  Checkbox,
  Box,
  FormControl,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { ExchangeContext } from "../contexts/ExchangeContext";
import { ExchangeContextType } from "../@types/exchange";
import { ContactMailOutlined } from "@mui/icons-material";

interface IWebSelectBar {}

const exchangeList = [
  "Binance",
  "Bitfinex",
  "Coinbase",
  "Coinsbit",
  "eToroX",
  "FTX",
  "Gateio",
  "Kucoin",
];

const WebSelectBar: React.FC<IWebSelectBar> = ({}: IWebSelectBar) => {
  const { exchanges,toggleSelect } = useContext(ExchangeContext) as ExchangeContextType;

  const websites = [
    { website: "Explore Price", route: "/search" },
    { website: "About", route: "/about" },
    { website: "Nav3", route: "/" },
  ];

  const handleBoxChecked = (e:React.ChangeEvent<HTMLInputElement>) => {
    toggleSelect(e.target.value,e.target.checked);
    console.log(e.target.name + e.target.checked);
  }

  return (
    <Paper
      sx={{
        // borderStyle: "solid",
        m: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography sx={{ textAlign: "center" }}>Exchange Websites</Typography>
      <FormGroup
        sx={{
          display: "flex",
          flexWrap: "wrap",
          // borderStyle: "solid",
          justifyContent: "center",
          width: 0.7,
          flexDirection:"row",
        }}
      >
        {exchanges.map((data) => {
          return (
            <FormControlLabel
              control={<Checkbox onChange={handleBoxChecked} checked={data.isSelect}/>}
              label={data.name}
              value={data.name}
              sx={{
                flexGrow: 1,
                maxWidth: 0.21,
                width: 0.21,
                borderStyle: "solid",
                maxHeight: 40,
                m: 2,
              }}
            />
          );
        })}
      </FormGroup>
    </Paper>
  );
};

export default WebSelectBar;

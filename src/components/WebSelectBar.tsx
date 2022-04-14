import React from "react";
import {
  Typography,
  Paper,
  Checkbox,
  Box,
  FormControl,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

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
  const websites = [
    { website: "Explore Price", route: "/search" },
    { website: "About", route: "/about" },
    { website: "Nav3", route: "/" },
  ];
  return (
    <Paper
      sx={{
        borderStyle: "solid",
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
          borderStyle: "solid",
          justifyContent: "center",
          width: 0.7,
        }}
      >
        {exchangeList.map((data) => {
          return (
            <FormControlLabel
              control={<Checkbox />}
              label={data}
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

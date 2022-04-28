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
import { ThemeContext } from "../contexts";
import { ContactMailOutlined } from "@mui/icons-material";

interface IWebSelectBar {}

const WebSelectBar: React.FC<IWebSelectBar> = ({}: IWebSelectBar) => {
  const { exchanges, toggleSelect} = useContext(
    ExchangeContext
  ) as ExchangeContextType;

  const {toggleColorMode} = useContext(ThemeContext)

  const websites = [
    { website: "Explore Price", route: "/search" },
    { website: "About", route: "/about" },
    { website: "Nav3", route: "/" },
  ];

  const handleBoxChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    toggleSelect(e.target.value, e.target.checked);
    console.log(e.target.name + e.target.checked);
  };

  return (
    <Paper
      sx={{
        // borderStyle: "solid",
        m: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#2EB872',
        borderRadius:3,
        py:5,
        width:0.9
      }}
    >
      <Typography sx={{ textAlign: 'center', fontSize: 50 }}>
        Exchange Websites
      </Typography>
      <FormGroup
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          // borderStyle: "solid",
          justifyContent: 'center',
          width: 0.7,
          flexDirection: 'row',
        }}
      >
        {exchanges.map((data) => {
          return (
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleBoxChecked}
                  checked={data.isSelect}
                />
              }
              label={data.name}
              value={data.name}
              className='border-2'
              key={data.name}
              sx={{
                flexGrow: 1,
                maxWidth: 0.21,
                width: 0.21,
                maxHeight: 40,
                m: 2,
                backgroundColor: '#b4b5af',
                borderRadius:2,
              }}
            />
          );
        })}
      </FormGroup>
    </Paper>
  );
};

export default WebSelectBar;

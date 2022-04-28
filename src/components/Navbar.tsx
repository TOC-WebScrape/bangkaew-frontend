import React, { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { SvgIcon } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import { Link } from "react-router-dom";
import {
  ContactSupportOutlined,
  LinkedCameraTwoTone,
} from "@mui/icons-material";
import { ThemeProvider, ThemeContext } from "../contexts";
import { AppIcon } from "../assets/icons";

interface NavbarProps {}
const Navbar: React.FC<NavbarProps> = ({}: NavbarProps) => {
  const pages = [
    { page: "Home", route: "/bangkaew-frontend" },
    { page: "Explore Price", route: "/bangkaew-frontend/search" },
    { page: "About", route: "/bangkaew-frontend/about" },
  ];
  const [dark, toggleDark] = useState(false);
  const colorMode = useContext(ThemeContext);
  const switchMode = () => {
    toggleDark(!dark);
    {
      colorMode.toggleColorMode();
    }
  };
  return (
    <AppBar sx={{ position: "sticky", mb: 0 }}>
      <Toolbar sx={{}}>
        <Link to='/' className='grow flex flex-row items-center'>
          <Avatar
            sx={{ mr: 2, height: 55, width: 55 }}
            src={AppIcon}
          ></Avatar>
          <Typography sx={{ color: "white", flexGrow: 1 }} variant='h6'>
            Bangkaew
          </Typography>
        </Link>
        <Box sx={{ display: "flex" }}>
          {pages.map(({ page, route }) => (
            <Box
              sx={{
                color: "white",
                display: "flex",
                borderRightStyle: "solid",
                justifyContent: "center",
                maxwidth: 200,
                px: 3,
              }}
              key={page}
            >
              <Link
                to={route}
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignContent: "center",
                }}
              >
                <Button
                  sx={{
                    color: "white",
                    fontSize: 13,
                    maxHeight: 40,
                    maxwidth: 200,
                    whiteSpace: "nowrap",
                  }}
                  key={page}
                >
                  {page}
                </Button>
              </Link>
            </Box>
          ))}
          <IconButton onClick={switchMode} sx={{ ml: 3 }}>
            {dark ? (
              <SvgIcon component={Brightness5Icon} sx={{ color: "#F0B90B" }} />
            ) : (
              <SvgIcon component={DarkModeIcon} sx={{ color: "#F0B90B" }} />
            )}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

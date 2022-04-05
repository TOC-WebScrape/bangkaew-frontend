import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { SvgIcon } from '@mui/material';
import { borderRadius, fontSize } from '@mui/system';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness5Icon from '@mui/icons-material/Brightness5';

interface NavbarProps {}
const Navbar: React.FC<NavbarProps> = ({}: NavbarProps) => {
  const pages = ['Explore Price', 'About', 'Nav3'];
  const [darkMode,setDarkMode] = useState(false);
  const handleNavbarClick = () => {};
  const switchMode = () =>{
      setDarkMode(!darkMode);
  };
  return (
    <AppBar sx={{position:'static',mb:2,}}>
      <Toolbar sx={{}}>
        <Avatar
          sx={{ mr: 2, height: 55, width: 55 }}
          src='https://avatars.githubusercontent.com/u/63555111?v=4'
        ></Avatar>
        <Typography
          sx={{ color: 'white', flexGrow: 1 }}
          variant='h6'
        >
          Bangkaew
        </Typography>
        <Box sx={{ display: 'flex' }}>
          {pages.map((page) => (
            <Box
              sx={{
                color: 'white',
                display: 'flex',
                borderRightStyle: 'solid',
                justifyContent: 'center',
                maxwidth:200,
                px:3
              }}
              key={page}
            >
              <Button
                sx={{
                  color: 'white', fontSize:13, maxHeight:40, maxwidth:200,whiteSpace:'nowrap'
                }}
                key={page}
              >
                {page}
              </Button>
            </Box>
          ))}
          <IconButton onClick={switchMode} sx={{ml:3}}>
            {darkMode ? (
              <SvgIcon component={Brightness5Icon} sx={{ color: '#F0B90B' }} />
            ) : (
              <SvgIcon component={DarkModeIcon} sx={{ color: '#F0B90B' }}  />
            )}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

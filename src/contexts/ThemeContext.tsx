import React , { createContext, useContext, useState, FC , useMemo} from 'react';
import { PaletteMode, createTheme, ThemeProvider as MuiThemeProvider} from '@mui/material';
import { light,dark } from '@mui/material/styles/createPalette';


export const ThemeContext = createContext({
  toggleColorMode:() => {}
});

export const ThemeProvider: FC = ({ children }) => {
  const [mode, setMode] = useState<PaletteMode>('light');
  
  const colorMode = useMemo(() => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        console.log("toggle Color Mode to"+ {mode})
        const currentMode = mode;
      },
    }),
    [],
  );
  
const theme = useMemo(
  () =>
    createTheme({
      palette: {
          mode,         
    }}),
  [mode]
);

  return (
    <ThemeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

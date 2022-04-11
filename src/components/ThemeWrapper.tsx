import React, { useContext, FC } from "react";
import { ThemeContext } from "../contexts";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";

const ThemeWrappper: FC = ({ children }) => {
  const { dark, toggleDark } = useContext(ThemeContext);
  const handleThemeChange = () => {};

  return { children };
};

export default ThemeWrappper;

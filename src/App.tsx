import "./App.css";
import { LandingPage, SearchPage, AboutPage } from "./components";
import { Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, ExchangeProvider } from './contexts';
import { Paper } from "@mui/material";
import { Box } from "@mui/system";
// import ExchangeProvider from "./contexts/ExchangeContext";

const MyApp = () => {
  return (
    <Paper sx={{ bgcolor: "background.default" }}>
      <Navbar />
      <Router />
    </Paper>
  );
};

const Router = () => {
  return (
    <Routes>
      <Route path='/bangkaew-frontend' element={<LandingPage />} />
      <Route path='/bangkaew-frontend/search' element={<SearchPage />} />
      <Route path='/bangkaew-frontend/about' element={<AboutPage />} />
      <Route
        path='*'
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
};

function App() {
  return (
    <ThemeProvider>
      <ExchangeProvider>
        <MyApp />
      </ExchangeProvider>
    </ThemeProvider>
  );
}

export default App;

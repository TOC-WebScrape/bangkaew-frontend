import './App.css';
import { LandingPage, SearchPage, AboutPage } from './components';
import { Navbar } from './components';
import { Routes, Route } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ThemeProvider } from './contexts';
import { Paper } from '@mui/material';
import { Box } from '@mui/system';

function App() {
  return (
    <ThemeProvider>
      <Paper sx={{ bgcolor: 'background.default' }}>
        <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route
            path='*'
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </Paper>
    </ThemeProvider>
  );
}

export default App;

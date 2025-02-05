import DetailView from './components/details/DetailView';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import ContextProvider from './context/ContextProvider';
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Header />
        <Box sx={{ marginTop: 10 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<DetailView />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;


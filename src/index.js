import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CartContextProvider from './context/CartContextProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';

ReactDOM.render(
  <React.StrictMode>
    <CartContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="products" element={<ProductsContainer />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

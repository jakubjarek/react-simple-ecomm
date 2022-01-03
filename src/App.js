import { useState } from 'react';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';
import Cart from './components/Cart/Cart';
import CartWidget from './components/CartWidget/CartWidget';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const switchCartVisibility = () => setIsCartOpen((prev) => !prev);

  return (
    <>
      <ProductsContainer setCart={setCart} />

      {isCartOpen && (
        <Cart content={cart} onCloseCart={switchCartVisibility} setCart={setCart} />
      )}

      {cart.length > 0 && !isCartOpen && (
        <CartWidget cartLength={cart.length} clickHandler={() => switchCartVisibility()} />
      )}
    </>
  );
}

export default App;

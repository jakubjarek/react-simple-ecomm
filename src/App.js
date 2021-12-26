import { useState } from 'react';

import Cart from './components/Cart/Cart';
import ItemsList from './components/ItemsList/ItemsList';
import CartWidget from './components/CartWidget/CartWidget';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  function addToCart(itemObj) {
    setCart((current) => [...current, itemObj]);
  }

  function switchCartVisibility() {
    setShowCart((current) => !current);
  }

  return (
    <>
      <ItemsList toCartHandler={addToCart} />
      {showCart && <Cart content={cart} closeCartHandler={switchCartVisibility} />}
      {cart.length && !showCart && (
        <CartWidget cartLength={cart.length} clickHandler={() => switchCartVisibility()} />
      )}
    </>
  );
}

export default App;

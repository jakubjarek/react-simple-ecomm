import { useState } from 'react';
import Items from './components/Items/Items';
import Cart from './components/Cart/Cart';
import CartWidget from './components/CartWidget/CartWidget';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const switchCartVisibility = () => setShowCart((prev) => !prev);

  return (
    <>
      <Items setCart={setCart} />

      {showCart && <Cart content={cart} closeCartHandler={switchCartVisibility} />}
      {cart.length > 0 && !showCart && (
        <CartWidget cartLength={cart.length} clickHandler={() => switchCartVisibility()} />
      )}
    </>
  );
}

export default App;

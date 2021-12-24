import { useState } from 'react';

import Cart from './components/Cart/Cart';
import ItemsList from './components/ItemsList/ItemsList';
import CartWidget from './components/CartWidget/CartWidget';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  function addToCart(itemObj) {
    setCart((cart) => [...cart, itemObj]);
  }

  return (
    <>
      <ItemsList toCartHandler={addToCart} />
      {showCart && <Cart content={cart} />}
      {cart.length && (
        <CartWidget
          cartLength={cart.length}
          clickHandler={() => setShowCart((showCart) => !showCart)}
        />
      )}
    </>
  );
}

export default App;

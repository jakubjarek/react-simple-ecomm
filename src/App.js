import { useState } from 'react';
import ReactDOM from 'react-dom';
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

      {isCartOpen &&
        ReactDOM.createPortal(
          <Cart content={cart} onCloseCart={switchCartVisibility} setCart={setCart} />,
          document.getElementById('modal-wrapper')
        )}

      {cart.length > 0 && !isCartOpen && (
        <CartWidget cartLength={cart.length} clickHandler={() => switchCartVisibility()} />
      )}
    </>
  );
}

export default App;

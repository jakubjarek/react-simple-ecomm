import { useState } from 'react';
import { createPortal } from 'react-dom';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';
import Cart from './components/Cart/Cart';
import CartWidget from './components/CartWidget/CartWidget';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const switchCartVisibility = () => setIsCartOpen((prev) => !prev);

  const cartModal = createPortal(
    <Cart onCloseCart={switchCartVisibility} />,
    document.getElementById('modal-wrapper')
  );

  return (
    <>
      <ProductsContainer />
      {isCartOpen ? cartModal : null}
      <CartWidget onClick={switchCartVisibility} />
    </>
  );
}

export default App;

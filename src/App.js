import { useState } from 'react';
import { createPortal } from 'react-dom';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';
import Cart from './components/Cart/Cart';
import CartWidget from './components/CartWidget/CartWidget';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (productData) => {
    // Check if the product is already in cart, if so
    // increment it's count. Not ideal way of doing that for sure.
    setCart((prevState) => {
      for (const cartProduct of prevState) {
        if (cartProduct.id === productData.id)
          return prevState.map((cartProduct) => ({
            ...cartProduct,
            count: cartProduct.count + (cartProduct.count < 5 ? 1 : 0),
          }));
      }

      return [...prevState, { ...productData, count: 1 }];
    });
  };

  const switchCartVisibility = () => setIsCartOpen((prev) => !prev);

  return (
    <>
      <ProductsContainer handleAddToCart={handleAddToCart} />
      {isCartOpen &&
        createPortal(
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

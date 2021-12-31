import { useState } from 'react';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';
import Cart from './components/Cart/Cart';
import CartWidget from './components/CartWidget/CartWidget';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const switchCartVisibility = () => setShowCart((prev) => !prev);

  const onChangeItemCount = (itemId, newCount) =>
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === itemId) item.count = newCount;
        return item;
      })
    );

  const onRemoveItem = (itemId) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
  };

  return (
    <>
      <ProductsContainer setCart={setCart} />

      {showCart && (
        <Cart
          content={cart}
          onCloseCart={switchCartVisibility}
          onRemoveItem={onRemoveItem}
          onChangeItemCount={onChangeItemCount}
        />
      )}

      {cart.length > 0 && !showCart && (
        <CartWidget cartLength={cart.length} clickHandler={() => switchCartVisibility()} />
      )}
    </>
  );
}

export default App;

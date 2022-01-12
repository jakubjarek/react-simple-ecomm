import { useContext } from 'react';
import { AiOutlineCloseSquare, AiOutlineShoppingCart } from 'react-icons/ai';
import CartContext from '../../context/cart-context';
import CartProduct from '../CartProduct/CartProduct';

function Cart({ onCloseCart }) {
  const { cartContent } = useContext(CartContext);

  const handleCartClose = (e) => {
    // Prevent closing the cart when clicking anywhere
    if (e.target === e.currentTarget) {
      onCloseCart();
    }
  };

  const productList = cartContent.length ? (
    <ul>
      {cartContent.map((p) => (
        <CartProduct key={p.id} productData={p} />
      ))}
    </ul>
  ) : (
    <div className="flex flex-col items-center justify-center py-12">
      <div>
        <AiOutlineShoppingCart size={64} />
      </div>
      <p className="text-xl font-bold mb-2">There's nothing in here 😕</p>
      <p className="underline cursor-pointer" onClick={handleCartClose}>
        Go and add some stuff!
      </p>
    </div>
  );

  return (
    <div
      className="overflow-y-auto fixed top-0 w-screen h-screen bg-black/50"
      onClick={handleCartClose}
    >
      <div className="w-full max-w-[1184px] px-4 pt-4 bg-white shadow-lg mx-auto">
        <div className=" w-full flex items-center justify-between bg-white">
          <span className="text-xl font-bold">Your Cart ({cartContent.length} items)</span>
          <button className="p-1" onClick={onCloseCart} aria-label="Close the cart">
            <AiOutlineCloseSquare
              className="text-gray-600 hover:text-gray-900 transition-colors"
              size={24}
            />
          </button>
        </div>
        <div className="mt-6">{productList}</div>
        <div className="flex p-4 bg-white border-t-2 border-solid border-slate-100 ">
          <span className="mx-auto text-lg font-bold">
            Total:
            <span className="ml-2">
              ${cartContent.reduce((acc, item) => acc + item.price * item.count, 0).toFixed(2)}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Cart;

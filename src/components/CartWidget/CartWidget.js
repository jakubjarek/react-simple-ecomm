import { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import CartContext from '../../context/cart-context';

function CartWidget({ onClick }) {
  const { cartContent } = useContext(CartContext);

  return (
    <>
      {cartContent.length > 0 && (
        <button
          onClick={onClick}
          className="fixed right-0 bottom-0 mr-4 mb-4 hover:bg-green-500 transition-colors flex w-14 h-14 items-center justify-center rounded-full bg-black"
          aria-label="Open the cart"
          aria-expanded="false"
        >
          <div className="flex p-2">
            <span className="text-center font-bold text-xl text-white">
              {cartContent.length}
            </span>
            <FaShoppingCart className="text-white" size={28} />
          </div>
        </button>
      )}
    </>
  );
}

export default CartWidget;

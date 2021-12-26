import { FaShoppingCart } from 'react-icons/fa';

function CartWidget({ show, cartLength, clickHandler }) {
  show = true;

  return (
    <>
      {show && (
        <button
          onClick={clickHandler}
          className="fixed right-0 bottom-0 mr-4 mb-4 hover:bg-green-500 transition-colors flex w-14 h-14 items-center justify-center rounded-full bg-black"
          aria-label="Open the cart"
          aria-expanded="false"
        >
          <div className="flex p-2">
            <span className="text-center font-bold text-xl text-white">{cartLength}</span>
            <FaShoppingCart className="text-white" size={28} />
          </div>
        </button>
      )}
    </>
  );
}

export default CartWidget;

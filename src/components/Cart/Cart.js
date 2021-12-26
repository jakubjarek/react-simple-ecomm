import { useEffect } from 'react';
import { AiOutlineCloseSquare } from 'react-icons/ai';

import CartItem from '../CartItem/CartItem';
import CartModal from '../CartModal/CartModal';

function Cart({ content, closeCartHandler }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <CartModal>
      <div className="w-full h-full flex flex-col items-center">
        <div className="overflow-y-auto w-full max-w-[1184px]  p-4 pb-0 bg-white shadow-lg">
          <div className="fixed w-full max-w-[1184px] top-0 right-1/2 translate-x-1/2 p-4 flex items-center justify-between bg-white shadow-lg">
            <span className="text-xl font-bold">Your Cart ({content.length} items)</span>
            <button className="p-1" onClick={closeCartHandler} aria-label="Close the cart">
              <AiOutlineCloseSquare size={24} />
            </button>
          </div>
          <div>
            <div className="mt-12">
              <ul className="pt-4">
                {content.map(({ id, title, price, image }) => (
                  <CartItem key={id} title={title} price={price} image={image} />
                ))}
              </ul>
            </div>

            <div className="flex p-4 bg-white border-t-2 border-solid border-slate-100 ">
              <span className="mx-auto text-lg font-bold">
                Total:
                <span className="ml-2">
                  ${content.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </CartModal>
  );
}

export default Cart;

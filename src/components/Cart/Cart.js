import { useState, useEffect } from 'react';

import CartModal from '../CartModal/CartModal';

function Cart({ content }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (content.length) {
      setTotal(content.reduce((acc, item) => acc + item.price, 0));
    }
  }, [content]);

  return (
    <CartModal>
      <div className=" w-full flex flex-col max-w-7xl min-h-[24rem] bg-white rounded-lg drop-shadow-2xl p-4 m-4">
        <span className="text-3xl font-bold">Your cart</span>
        <div className="">{/* Cart content */}</div>
        <div className="flex mt-auto w-full text-2xl font-bold">
          <span className="ml-auto">
            Total:
            <span className="ml-2">${total}</span>
          </span>
        </div>
      </div>
    </CartModal>
  );
}

export default Cart;

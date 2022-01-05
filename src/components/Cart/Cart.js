import { useEffect } from 'react';
import { AiOutlineCloseSquare, AiOutlineShoppingCart } from 'react-icons/ai';
import CartItem from '../CartItem/CartItem';

function Cart({ content, onCloseCart, setCart }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  const onChangeItemCount = (itemId, newCount) =>
    setCart((prev) => {
      return prev.map((item) => {
        if (item.id === itemId) item.count = newCount;
        return item;
      });
    });

  const onRemoveItem = (itemId) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
  };

  return (
    <div className="fixed top-0 w-screen h-screen flex items-start justify-center bg-black/50">
      <div className="w-full h-full flex flex-col items-center">
        <div className="overflow-y-auto w-full max-w-[1184px]  p-4 pb-0 bg-white shadow-lg">
          <div className="fixed w-full z-50 max-w-[1184px] top-0 right-1/2 translate-x-1/2 p-4 flex items-center justify-between bg-white shadow-lg">
            <span className="text-xl font-bold">Your Cart ({content.length} items)</span>
            <button className="p-1" onClick={onCloseCart} aria-label="Close the cart">
              <AiOutlineCloseSquare size={24} />
            </button>
          </div>
          <div>
            <div className="mt-12">
              {content.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div>
                    <AiOutlineShoppingCart size={64} />
                  </div>
                  <p className="text-xl font-bold mb-2">There's nothing in here 😕</p>
                  <p className="underline cursor-pointer" onClick={onCloseCart}>
                    Go and add some stuff!
                  </p>
                </div>
              ) : (
                <ul className="pt-4">
                  {content.map(({ id, title, price, image, count }) => (
                    <CartItem
                      key={id}
                      id={id}
                      title={title}
                      price={price}
                      image={image}
                      count={count}
                      onRemoveItem={onRemoveItem}
                      onChangeItemCount={onChangeItemCount}
                    />
                  ))}
                </ul>
              )}
            </div>

            <div className="flex p-4 bg-white border-t-2 border-solid border-slate-100 ">
              <span className="mx-auto text-lg font-bold">
                Total:
                <span className="ml-2">
                  ${content.reduce((acc, item) => acc + item.price * item.count, 0).toFixed(2)}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

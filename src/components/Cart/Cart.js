import { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import CartContext from '../../context/cart-context';
import CartProduct from '../CartProduct/CartProduct';

function Cart() {
  const { cartContent } = useContext(CartContext);

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
      <Link to="/products">
        <span className="underline cursor-pointer">Go and add some stuff!</span>
      </Link>
    </div>
  );

  return (
    <div className="flex bg-slate-100 py-6 ">
      <div className="w-full max-w-[1184px] p-4 pb-0 mx-auto bg-white">
        <div className=" w-full flex items-center justify-between">
          <span className="text-xl font-bold">Your Cart ({cartContent.length} items)</span>
        </div>

        <div className="mt-4">{productList}</div>

        <div className="flex p-4 border-slate-100 ">
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

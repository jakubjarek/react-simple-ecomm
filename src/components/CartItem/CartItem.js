import { useState } from 'react';
import { BsTrash } from 'react-icons/bs';

function CartItem({ id, title, price, image, count, onRemoveItem, onChangeItemCount }) {
  const [quantity, setQuantity] = useState(count);

  const onQuantityChange = ({ target: { value } }) => {
    setQuantity(Number(value));
    onChangeItemCount(id, Number(value));
  };

  return (
    <li className="border-b border-solid border-slate-100 py-5  ">
      <div>
        <div className="flex items-top">
          <div className="relative w-20 h-28 md:w-32  lg:w-40 mr-6 flex-shrink-0">
            <img
              className="w-full h-full object-contain"
              src={image}
              alt=""
              aria-hidden="true"
            />
          </div>
          <div className="overflow-hidden">
            <p className="mb-2 text-ellipsis overflow-hidden whitespace-nowrap">{title}</p>
            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <select
                  className="w-10 mr-4 p-1"
                  onChange={onQuantityChange}
                  title="Change quantity"
                  defaultValue={quantity}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>

                <button className="p-1" onClick={() => onRemoveItem(id)}>
                  <BsTrash
                    className="hover:text-red-500 transition-colors"
                    size={21}
                    title={`Remove ${title} from your cart`}
                  />
                </button>
              </div>
              <p className="font-bold">${(price * quantity).toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartItem;

function CartItem({ title, price, image }) {
  return (
    <li className="border-b border-solid border-slate-100 py-5  ">
      <div>
        <div className="flex items-top">
          <div className="w-20 h-28 md:w-32  lg:w-40 mr-6 flex-shrink-0">
            <img
              className="w-full h-full object-contain"
              src={image}
              alt=""
              aria-hidden="true"
            />
          </div>
          <div className="overflow-hidden">
            <p className="mb-2 text-ellipsis overflow-hidden whitespace-nowrap">{title}</p>
            <p className="font-bold">${price}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartItem;

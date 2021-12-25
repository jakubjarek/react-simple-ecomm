function CartItem({ title, price, image }) {
  return (
    <li className="mb-4">
      <div className="p-4 h-40 max-w-xl flex">
        <div className="h-full lg:min-w-[8rem] mr-8">
          <img className="w-full h-full object-cover" src={image} alt="" aria-hidden="true" />
        </div>
        <div className="flex flex-col items-start pt-2">
          <p className="mb-4">{title}</p>
          <p className="font-bold text-xl">${price}</p>
        </div>
      </div>
    </li>
  );
}

export default CartItem;

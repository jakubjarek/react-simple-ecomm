const Item = ({ id, title, price, image, clickHandler }) => (
  <li
    className="flex flex-col max-w-sm mb-2 cursor-pointer hover:opacity-75 focus:outline-2 focus:outline-blue-500 outline outline-1 outline-black relative"
    tabIndex={0}
    onClick={() => clickHandler}
  >
    <div className="w-full h-96">
      <img className="w-full h-full object-cover p-2" src={image} alt="" aria-hidden="true" />
    </div>
    <div className="flex flex-col h-32 px-2 mt-4 mb-2">
      <p className="font-semibold mb-2">{title}</p>
      <p className="text-xl font-bold">${price}</p>
      <div className="w-full bg-black text-white font-semibold text-center mt-auto p-1">
        Add to cart
      </div>
    </div>
  </li>
);

export default Item;

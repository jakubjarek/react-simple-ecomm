const Item = ({ id, title, price, image, clickHandler }) => (
  <li
    className="group hover:scale-105 transition-transform flex flex-col max-w-sm mb-4 cursor-pointer focus:outline-2 focus:outline-blue-500 relative"
    tabIndex={0}
    onClick={() => clickHandler}
  >
    <div className="w-full h-96 mb-2">
      <img className="w-full h-full object-cover" src={image} alt="" aria-hidden="true" />
    </div>
    <div className="flex flex-col h-36 px-2 mt-4">
      <p className="font-semibold mb-2">{title}</p>
      <p className="text-xl font-bold">${price}</p>
      <div className="group-hover:bg-green-500 transition-colors w-full bg-black text-white rounded-sm font-semibold text-center mt-auto p-1">
        Add to cart
      </div>
    </div>
  </li>
);

export default Item;

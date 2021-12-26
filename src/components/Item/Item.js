function Item({ id, title, price, image, clickHandler }) {
  return (
    <li
      tabIndex={0}
      className="group flex flex-col max-w-sm cursor-pointer overflow-hidden"
      onClick={() => clickHandler({ id, title, price, image })}
    >
      <div className="pb-2 bg-white">
        <div className="w-full h-72 mb-2">
          <img className="w-full h-full object-cover" src={image} alt="" aria-hidden="true" />
        </div>
        <div className="flex flex-col px-2 mt-4">
          <div className="mb-6">
            <p className="mb-2 text-ellipsis overflow-hidden whitespace-nowrap">{title}</p>
            <p className="font-bold">${price.toFixed(2)}</p>
          </div>
          <div className="group-hover:bg-green-500 transition-colors w-full bg-black text-white rounded-sm font-semibold text-center mt-auto p-1">
            Add to cart
          </div>
        </div>
      </div>
    </li>
  );
}

export default Item;

const ItemList = ({ children }) => {
  return (
    <div className="p-4">
      <ul className="grid md:grid-cols-2 lg:grid-cols-3  gap-4 items-top">{children}</ul>;
    </div>
  );
};

export default ItemList;

const ItemsWrapper = ({ children }) => {
  return (
    <div className="flex flex-col items-center bg-zinc-200 min-h-[100vh]">{children}</div>
  );
};

export default ItemsWrapper;

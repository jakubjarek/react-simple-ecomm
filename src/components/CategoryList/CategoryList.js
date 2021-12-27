function CategoriesList({ children }) {
  return (
    <div className=" my-4 w-full flex items-center justify-center px-4">
      <ul className=" overflow-auto" style={{ scrollbarWidth: 'none' }}>
        <div className="m-x-4 flex items-center gap-2">{children}</div>
      </ul>
    </div>
  );
}

export default CategoriesList;

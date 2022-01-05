function CategoryList({ children }) {
  return (
    <div className=" my-4 w-full flex items-center justify-center px-4">
      <ul
        className=" overflow-auto m-x-4 flex items-center gap-2"
        style={{ scrollbarWidth: 'none' }}
      >
        {children}
      </ul>
    </div>
  );
}

export default CategoryList;

import Category from '../Category/Category';

function CategoryList({ categories, setCategories }) {
  const onCategoryRemove = (category) =>
    setCategories((current) => current.filter((cat) => cat !== category));

  return (
    <div className=" my-4 w-full flex items-center justify-center px-4">
      <ul className=" overflow-auto" style={{ scrollbarWidth: 'none' }}>
        <div className="m-x-4 flex items-center gap-2">
          {categories.map((category) => (
            <Category key={category} category={category} onCategoryRemove={onCategoryRemove} />
          ))}
        </div>
      </ul>
    </div>
  );
}

export default CategoryList;

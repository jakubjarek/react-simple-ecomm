import Category from '../Category/Category';

/**
 * These 3 components ideally shouldn't be here
 * but project structuring is something that
 * I have to work on in the future.
 */

const Wrapper = ({ children }) => (
  <div className=" my-4 w-full flex items-center justify-center px-4">{children}</div>
);

const List = ({ children }) => (
  <ul className=" overflow-auto" style={{ scrollbarWidth: 'none' }}>
    {children}
  </ul>
);

const ListContainer = ({ children }) => (
  <div className="m-x-4 flex items-center gap-2">{children}</div>
);

function CategoryList({ categories, setCategories }) {
  const onCategoryRemove = (category) =>
    setCategories((current) => current.filter((cat) => cat !== category));

  return (
    <Wrapper>
      <List>
        <ListContainer>
          {categories.map((category) => (
            <Category key={category} category={category} onCategoryRemove={onCategoryRemove} />
          ))}
        </ListContainer>
      </List>
    </Wrapper>
  );
}

export default CategoryList;

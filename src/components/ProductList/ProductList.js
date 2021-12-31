import Item from '../Item/Item';

const filterByCategory = (items, categories) => {
  if (!categories.length) return [];
  return items.filter(({ category }) => category.match(new RegExp(categories.join('|'))));
};

const ProductList = ({ products, categories, setCart }) => {
  const onAddToCart = (item) => {
    setCart((prev) => [...prev, { ...item, count: 1 }]);
  };

  return (
    <div className="p-4">
      <ul className="grid md:grid-cols-2 lg:grid-cols-3  gap-4 items-top">
        {filterByCategory(products, categories).map(({ id, title, price, image }) => (
          <Item
            key={id}
            id={id}
            title={title}
            price={price}
            image={image}
            onAddToCart={onAddToCart}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

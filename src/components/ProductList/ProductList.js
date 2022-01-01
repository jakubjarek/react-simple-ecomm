import Product from '../Product/Product';

function ProductList({ products, categories, setCart }) {
  const onAddToCart = (product) => setCart((prev) => [...prev, { ...product, count: 1 }]);

  const filterByCategory = (items, categories) => {
    if (!categories.length) return [];
    return items.filter(({ category }) => category.match(new RegExp(categories.join('|'))));
  };

  return (
    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-top p-4">
      {filterByCategory(products, categories).map(({ id, title, price, image }) => (
        <Product
          key={id}
          id={id}
          title={title}
          price={price}
          image={image}
          onAddToCart={onAddToCart}
        />
      ))}
    </ul>
  );
}

export default ProductList;

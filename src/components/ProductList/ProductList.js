import Product from '../Product/Product';

function ProductList({ products, categories, setCart }) {
  //
  const handleClick = (product) => {
    setCart((cartState) => {
      for (const cartProduct of cartState) {
        if (cartProduct.id === product.id)
          return cartState.map((cartProduct) => ({
            ...cartProduct,
            count: cartProduct.count + (cartProduct.count < 5 ? 1 : 0),
          }));
      }

      return [...cartState, { ...product, count: 1 }];
    });
  };

  const filterByCategory = (products, categories) => {
    if (!categories.length) return [];
    return products.filter(({ category }) => category.match(new RegExp(categories.join('|'))));
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
          onClick={handleClick}
        />
      ))}
    </ul>
  );
}

export default ProductList;

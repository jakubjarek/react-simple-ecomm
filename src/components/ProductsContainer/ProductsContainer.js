import { useState, useRef, useEffect } from 'react';
import { getAllProducts, getAllCategories } from '../../api';
import CategoryList from '../CategoryList/CategoryList';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import Product from '../Product/Product';
import Category from '../Category/Category';

function ProductsContainer() {
  const products = useRef([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      products.current = await getAllProducts();
      setCategories(await getAllCategories());
      setIsLoading(false);
    };

    getData();
  }, []);

  const filteredProducts = products.current.filter(({ category }) =>
    category.match(new RegExp(categories.join('|')))
  );

  const handleCategoryRemove = (category) =>
    setCategories((prev) => prev.filter((cat) => cat !== category));

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="flex flex-col items-center bg-zinc-200 min-h-[100vh]">
          <CategoryList>
            {categories.map((category) => (
              <Category key={category} category={category} onClick={handleCategoryRemove} />
            ))}
          </CategoryList>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-top p-4">
            {filteredProducts.map((product) => (
              <Product key={product.id} productData={product} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default ProductsContainer;

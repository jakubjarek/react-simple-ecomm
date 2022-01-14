import { useState, useRef, useEffect } from 'react';
import { getAllProducts } from '../../api';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import Product from '../Product/Product';

function ProductsContainer() {
  const products = useRef([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      products.current = await getAllProducts();
      setIsLoading(false);
    };

    getData();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="flex flex-col items-center">
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {products.current.map((product) => (
              <Product key={product.id} productData={product} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default ProductsContainer;

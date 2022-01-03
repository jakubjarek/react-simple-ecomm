import { useState, useEffect } from 'react';
import { getAllProducts, getAllCategories } from '../../api';
import CategoryList from '../CategoryList/CategoryList';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import ProductList from '../ProductList/ProductList';

function ProductsContainer({ setCart }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setProducts(await getAllProducts());
      setCategories(await getAllCategories());
      setIsLoading(false);
    };

    getData();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ContentWrapper>
          <CategoryList categories={categories} setCategories={setCategories} />
          <ProductList products={products} categories={categories} setCart={setCart} />
        </ContentWrapper>
      )}
    </>
  );
}

export default ProductsContainer;

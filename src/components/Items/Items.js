import { useState, useEffect } from 'react';
import CategoryList from '../CategoryList/CategoryList';
import Category from '../Category/Category';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import ItemsWrapper from '../ItemsWrapper/ItemsWrapper';
import ItemList from '../ItemList/ItemList';
import Item from '../Item/Item';

function Items({ setCart }) {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const allItems = await (await fetch('https://fakestoreapi.com/products/')).json();

      const allCategories = await (
        await fetch('https://fakestoreapi.com/products/categories')
      ).json();

      setItems(allItems);
      setCategories(allCategories);
      setLoading(false);
    })();
  }, []);

  const handleAddToCart = (itemObj) => setCart((prev) => [...prev, itemObj]);

  const handleRemoveCategory = (category) =>
  setCategories((current) => current.filter((cat) => cat !== category));
  
  const filterByCategory = (items, categories) => {
    if (!categories.length) return [];
  
    return items.filter(({ category }) => category.match(new RegExp(categories.join('|'))));
  };

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <ItemsWrapper>
          <CategoryList>
            {categories.map((cat) => (
              <Category key={cat} category={cat} onClick={handleRemoveCategory} />
            ))}
          </CategoryList>
          <ItemList>
            {filterByCategory(items, categories).map(({ id, title, price, image }) => (
              <Item
                key={id}
                id={id}
                title={title}
                price={price}
                image={image}
                onClick={handleAddToCart}
              />
            ))}
          </ItemList>
        </ItemsWrapper>
      )}
    </>
  );
}

export default Items;


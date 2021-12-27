import { useState, useEffect } from 'react';

import Item from '../Item/Item';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

function ItemsList({ toCartHandler }) {
  const [products, setProdutcs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const result = await (await fetch('https://fakestoreapi.com/products/')).json();
      setProdutcs(result);
      setLoading(false);
    })();
  }, []);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="flex flex-col items-center bg-zinc-200">
          <div className="p-4">
            <ul className="grid md:grid-cols-2 lg:grid-cols-3  gap-4 items-top">
              {products.map(({ id, title, price, image }) => (
                <Item
                  key={id}
                  id={id}
                  title={title}
                  price={price}
                  image={image}
                  clickHandler={toCartHandler}
                />
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default ItemsList;

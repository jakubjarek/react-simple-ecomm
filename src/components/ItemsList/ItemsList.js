import { useState, useEffect } from 'react';
import Wrapper from '../Wrapper/Wrapper';
import Item from '../Item/Item';

function ItemsList({ toCartHandler }) {
  const [products, setProdutcs] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await (await fetch('https://fakestoreapi.com/products/')).json();
      setProdutcs(result);
    })();
  }, []);

  return (
    <Wrapper>
      <div>
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
    </Wrapper>
  );
}

export default ItemsList;

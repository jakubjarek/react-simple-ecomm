import { useState, useEffect } from 'react';
import getProducts from '../../api/getProducts';
import Wrapper from '../Wrapper/Wrapper';
import Item from '../Item/Item';

import CartWidget from '../CartWidget/CartWidget';

function ItemsList({ toCartHandler }) {
  const [products, setProdutcs] = useState([]);

  useEffect(() => {
    getProducts().then((productsList) => setProdutcs(productsList));
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
        <CartWidget />
      </div>
    </Wrapper>
  );
}

export default ItemsList;

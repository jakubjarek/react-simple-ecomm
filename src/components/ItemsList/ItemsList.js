import { useState, useEffect } from 'react';
import getProducts from '../../api/getProducts';
import Wrapper from '../Wrapper/Wrapper';
import Item from '../Item/Item';

const ItemsList = ({ toCartHandler }) => {
  const [products, setProdutcs] = useState([]);

  useEffect(() => {
    getProducts().then((productsList) => setProdutcs(productsList));
  }, []);

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default ItemsList;

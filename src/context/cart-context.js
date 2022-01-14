import { createContext } from 'react';

// properties added for better autocompletion
const CartContext = createContext({
  cartContent: [],
  addProduct: (productData) => {},
  removeProduct: (productData) => {},
  updateProductCount: (productData, newCount) => {},
});

export default CartContext;

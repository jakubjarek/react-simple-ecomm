import { createContext, useReducer } from 'react';

const MAX_PRODUCT_COUNT = 5;

function reducer(state, { type, payload }) {
  switch (type) {
    case 'APPEND_PRODUCT':
      for (const p of state) {
        if (p.id === payload.id) {
          return state.map((p) => {
            if (p.id === payload.id) {
              return {
                ...p,
                count: p.count + (p.count < MAX_PRODUCT_COUNT ? 1 : 0),
              };
            } else {
              return p;
            }
          });
        }
      }
      return [...state, { ...payload, count: 1 }];
    case 'REMOVE_PRODUCT':
      return state.filter((p) => p.id !== payload.id);
    case 'UPDATE_PRODUCT_COUNT':
      return state.map((p) => (p.id === payload.id ? payload : p));
    default:
      return state;
  }
}

const CartContext = createContext({
  cartContent: [],
  addProduct: (productData) => {},
  removeProduct: (productData) => {},
  updateProductCount: (productData, newCount) => {},
});

export const CartContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, []);

  const addCartProduct = (productData) =>
    dispatch({ type: 'APPEND_PRODUCT', payload: productData });

  const removeCartProduct = (productData) =>
    dispatch({ type: 'REMOVE_PRODUCT', payload: productData });

  const updateCartProductCount = (productData, newCount) =>
    dispatch({
      type: 'UPDATE_PRODUCT_COUNT',
      payload: { ...productData, count: newCount },
    });

  return (
    <CartContext.Provider
      value={{
        cartContent: cart,
        addProduct: addCartProduct,
        removeProduct: removeCartProduct,
        updateProductCount: updateCartProductCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

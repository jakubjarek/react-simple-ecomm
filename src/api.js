const BASE_URL = 'https://fakestoreapi.com/';

export const getAllProducts = async () => await (await fetch(BASE_URL + 'products/')).json();

export const getProductsByCategory = async (category) =>
  await (await fetch(`${BASE_URL} category/${category}`)).json();

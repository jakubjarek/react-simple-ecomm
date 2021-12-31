const BASE_URL = 'https://fakestoreapi.com/';

export const getAllProducts = async () => await (await fetch(BASE_URL + 'products/')).json();

export const getAllCategories = async () =>
  await (await fetch(BASE_URL + 'products/categories/')).json();

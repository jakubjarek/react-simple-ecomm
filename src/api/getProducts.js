const getProducts = async () => {
  try {
    const x = await fetch('https://fakestoreapi.com/products/');
    const y = await x.json();
    return y;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getProducts;

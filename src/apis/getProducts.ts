

const getAllProducts = async () => {
  const res = await fetch("/api/products");
  const data = await res.json();
  return data;
};
export default getAllProducts;
getAllProducts()
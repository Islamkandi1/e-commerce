

const getAllProducts = async (page=1) => {
  const res = await fetch(`/api/products?page=${page}&limit=10`);
  const data = await res.json();
  return data;
};
export default getAllProducts;
getAllProducts()
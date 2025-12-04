
const getAllProducts = async () => {
  const searchParams = new URLSearchParams(window.location.search);
  const query = new URLSearchParams(searchParams).toString();

  // const page = Number(searchParams.get("page")) || 1;
  const res = await fetch(`/api/products?${query}&limit=10`);
  const data = await res.json();
  return data;
};
export default getAllProducts;

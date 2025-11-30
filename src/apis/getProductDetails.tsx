export default async function getProductdetails(id: number) {
    const res = await fetch(`/api/productDetails/${id}`);
    // if (!res.ok) throw new Error("Failed to fetch product details");
    const data = await res.json();
    return data;
}
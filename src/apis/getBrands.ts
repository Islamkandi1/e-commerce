export default async function getBrands() {
    const res = await fetch(`/api/brands`);
    if (!res.ok) throw new Error("Failed to fetch product details");
    const data = await res.json();
    return data;
}
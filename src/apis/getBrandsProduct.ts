export default async function getBrandsProduct(brandName: string) {
    const res = await fetch(`/api/brandProduts/${brandName}`);
    if (!res.ok) throw new Error("Failed to fetch product details");
    const data = await res.json();
    return data;
}
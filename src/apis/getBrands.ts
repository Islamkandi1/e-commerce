"use server";
export default async function getBrands() {
    const res = await fetch(`${process.env.URL}/api/brands`);
    if (!res.ok) throw new Error("Failed to fetch brands ");
    const data = await res.json();
    return data;
}
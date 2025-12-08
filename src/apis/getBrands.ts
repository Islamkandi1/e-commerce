"use server";
export default async function getBrands() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/brands`);
    if (!res.ok) throw new Error("Failed to fetch brands ");
    const data = await res.json();
    return data;
}
"use server";
export default async function getSubcategory() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/dressStyle`);
    if (!res.ok) throw new Error("Failed to fetch sucategory ");
    const data = await res.json();
    return data;
}
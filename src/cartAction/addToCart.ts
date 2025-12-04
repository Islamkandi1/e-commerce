"use server";
import { getMyToken } from "@/utilities/geyMyToken";
import { supabaseServer } from "./../../supabase-server";
import { product } from "@/types/product.type";

export async function AddToCart(data: product, count: number) {
  const token = await getMyToken();
  if (!token) {
    return {status:"not auth"}
  }

  const { error } = await supabaseServer.from("cart").insert({
    productName: data.productName,
    productDescription: data.description,
    brand: data.brand,
    category: data.category,
    quantity: count,
    user_id: token,
    image:data.image,
    price:data.price
  });
  
  return {error};
}

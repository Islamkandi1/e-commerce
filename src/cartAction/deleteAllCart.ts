"use server";
import { supabaseServer } from "../../supabase-server";
import { getMyToken } from "@/utilities/geyMyToken";

export default async function clearCart() {
  const token = await getMyToken(); 
  const { error, data } = await supabaseServer
    .from("cart")
    .delete()
    .eq("user_id", token); 

  return { error, data };
}
"use server"
import { getMyToken } from "@/utilities/geyMyToken";
import { supabaseServer } from "../../supabase-server";

export default async function getAllCart() {
  const token = await getMyToken();
  if (!token) {
    return { status: "not auth" };
  }
  const { error, data } = await supabaseServer
    .from("cart")
    .select("*")
    .eq("user_id", token);
  return { error, data };
}

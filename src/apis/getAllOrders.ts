"use server"
import { getMyToken } from "@/utilities/geyMyToken";
import { supabaseServer } from "../../supabase-server";

export default async function getAllOrder() {
  const token = await getMyToken();
  const { error, data } = await supabaseServer
    .from("orders")
    .select("*")
    .eq("user_id", token);
  return { error, data };
}

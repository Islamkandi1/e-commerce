"use server"
import { getMyToken } from "@/utilities/geyMyToken";
import { supabaseServer } from "../../supabase-server";
import { rediret } from "@/redirectUser";

export default async function getAllCart() {
  const token = await getMyToken();

     rediret(token as string)
  const { error, data } = await supabaseServer
    .from("cart")
    .select("*")
    .eq("user_id", token);
  return { error, data };
}

"use server";
import { getMyToken } from "@/utilities/geyMyToken";
import { supabaseServer } from "../../supabase-server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { Item } from "@/types/cart.type";
import { Total } from "@/types/total.type";

export default async function checkOut(cartData:Item[] |null, total:Total|undefined) {
  const session = await getServerSession(authOptions);

  const token = await getMyToken();

  const { error, data } = await supabaseServer.from("orders").insert([
    {
      userName: `${session?.user.firstName} ${session?.user.lastName}`,
      email: session?.user.email,
      products: cartData, 
      total: total?.price,
      user_id: token,
    },
  ]);

  return { error, data };
}

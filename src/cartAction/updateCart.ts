"use server";
import { supabaseServer } from "../../supabase-server";

export const updateCartQuantity = async ({ id, increment }: { id: string; increment: number }) => {
  const { data: existingItem, error: fetchError } = await supabaseServer
    .from("cart")
    .select("quantity")
    .eq("id", id)
    .single();

  if (fetchError) throw new Error("Cannot fetch cart item");

  //   ----------------------update quantity---------------------------------------
  const newQuantity = (existingItem.quantity || 0) + increment;

  const { data, error } = await supabaseServer
    .from("cart")
    .update({ quantity: newQuantity })
    .eq("id", id)
    .select("*");

  if (error) throw new Error("Failed to update cart item");

  return data;
};

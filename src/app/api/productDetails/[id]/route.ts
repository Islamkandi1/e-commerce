import { NextResponse } from "next/server";
import { supabaseServer } from "../../../../../supabase-server";

export async function GET(
  _req: Request,
 context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
   const productId = Number(id);
  const { data, error } = await supabaseServer
    .from("products")
    .select("*")
    .eq("id", productId)
    .single();

  if (error) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }

  return NextResponse.json(data);
}

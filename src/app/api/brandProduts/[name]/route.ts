import { NextResponse } from "next/server";
import { supabaseServer } from "../../../../../supabase-server";

export async function GET(
  _req: Request,
  { params }: { params: { name: string } }
) {
  const { name } = await params;

  const { data, error } = await supabaseServer
    .from("products")
    .select("*")
    .eq("brand", name)

  if (error) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }

  return NextResponse.json(data);
}
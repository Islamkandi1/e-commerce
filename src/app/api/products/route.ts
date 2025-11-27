
import { NextResponse } from "next/server";
import { supabaseServer } from "../../../../supabase-server";

export async function GET() {
  const { data, error } = await supabaseServer
    .from("products")
    .select("*");
    console.log(data);
    
  return NextResponse.json({ data, error });
}
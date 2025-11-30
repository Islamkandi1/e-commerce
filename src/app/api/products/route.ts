import { NextResponse } from "next/server";
import { supabaseServer } from "../../../../supabase-server";

export async function GET(req:Request) {
  const searchParams = new URL(req.url).searchParams;
  const page = Number(searchParams.get("page")) || 1;
  const limit = 10;

  const from = (page - 1) * limit;
  const to = from + limit - 1;


  const { data,count } = await supabaseServer.from("products").select("*",{ count: "exact" }).range(from, to);;

  return NextResponse.json({ data, count, page, totalPages: Math.ceil(count! / limit) })
}

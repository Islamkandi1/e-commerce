import { NextResponse } from "next/server";
import { supabaseServer } from "../../../../supabase-server";

export async function GET(req: Request) {
  const searchParams = new URL(req.url).searchParams;

  const page = Number(searchParams.get("page")) || 1;
  const limit =10;

  const from = (page - 1) * limit;
  const to = from + limit - 1;

  const { data, error, count } = await supabaseServer
    .from("products")
    .select("*", { count: "exact" })
    .range(from, to);

  return NextResponse.json({
    data,
    error,
    pageInfo: {
      page,
      limit,
      total: count,
      totalPages: Math.ceil((count || 0) / limit),
    },
  });
}

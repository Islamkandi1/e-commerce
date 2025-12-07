import { NextResponse } from "next/server";
import { supabaseServer } from "../../../../supabase-server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const page = Number(searchParams.get("page")) || 1;
  const limit = 10;
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  // filters
  const category = searchParams.getAll("category"); // array
  const brands = searchParams.getAll("brands"); // array
  const dressStyle = searchParams.getAll("dressStyle"); // array
  const price = searchParams.get("price"); // single
  console.log(searchParams);
  
  let query = supabaseServer
    .from("products")
    .select("*", { count: "exact" })
    .range(from, to);

  // Apply filters
  if (category.length > 0) {
    query = query.in("category", category);
  }

  if (brands.length > 0) {
    query = query.in("brand", brands);
  }

  if (dressStyle.length > 0) {
    query = query.in("subcategory", dressStyle);
  }

  if (price) {
    query = query.lte("price", Number(price));
  }

  const { data, count, error } = await query;

    if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }

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

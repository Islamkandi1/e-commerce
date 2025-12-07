import { NextResponse } from "next/server";
import { supabaseServer } from "../../../../supabase-server";

export async function GET() {
  const { data, error } = await supabaseServer
    .from('products')
    .select('brand, Colors', { count: 'exact' })
    .neq('brand', null); 

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  
  const uniqueBrands = Array.from(new Set(data.map((item) => item.brand )));

  return NextResponse.json(uniqueBrands);
}
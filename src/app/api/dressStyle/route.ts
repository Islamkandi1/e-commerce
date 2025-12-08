import { NextResponse } from "next/server";
import { supabaseServer } from "../../../../supabase-server";

export async function GET() {
  const { data, error } = await supabaseServer
    .from('products')
    .select('subcategory', { count: 'exact' })
    .neq('subcategory', null); 
    
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  
  const uniquesubCategory = Array.from(new Set(data.map((item) => item.subcategory )));
    
  return NextResponse.json(uniquesubCategory);
}

import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "../../../../../supabase-server";
import argon2 from "argon2";

export async function POST(req:NextRequest) {
  const body = await req.json();
  const { firstName , lastName, email, password , confirmPassword } = body;

  const passHashed = await argon2.hash(password);
  const  confirmHask = await argon2.hash(confirmPassword);
  const { data, error } = await supabaseServer
    .from("users")
    .insert({ firstName , lastName, email, password: passHashed , confirmPassword:confirmHask ,ok:true} )
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({ user: data });
}

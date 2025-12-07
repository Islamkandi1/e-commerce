"use server"
import { supabaseServer } from "../../supabase-server"

export const deleteItem = async (id:string) =>{

    
const {error,data} = await supabaseServer.from("cart").delete().eq("id",id).select("*")

if(error){
    throw new Error("some thing went wron")
}

return data
}
"use server"
import { supabaseServer } from "../../supabase-server"

export const deleteItem = async (id:string) =>{
    console.log(id);
    
const {error} = await supabaseServer.from("cart").delete().eq("id",id)

if(error){
    throw new Error("some thing went wron")
}

return true
}
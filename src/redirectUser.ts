import { redirect } from 'next/navigation';
import { Res } from './types/cart.type';
export const rediret = (res:Res)=>{
      if(res.status === "not auth"){
    redirect('/login')
  }
}
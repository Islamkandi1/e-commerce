import { redirect } from 'next/navigation';
export const rediret = (token:string)=>{
      if(!token){
    redirect('/login')
  }
}
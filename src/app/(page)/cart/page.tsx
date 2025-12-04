
import Mycart from '@/app/_components/myCart/Mycart';
import getAllCart from '@/cartAction/getCard';
import { Res } from '@/types/cart.type';
import { redirect } from 'next/navigation';


const Cart = async () => {
  const res:Res = await getAllCart()
  if(res.status === "not auth"){
    redirect('/login')
  }
  return (
    <Mycart res={res}/>
  )
}

export default Cart

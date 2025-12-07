
import Mycart from '@/app/_components/myCart/Mycart';
import getAllCart from '@/cartAction/getCard';
import { Res } from '@/types/cart.type';

import { rediret } from './../../../redirectUser';


const Cart = async () => {
   const res: Res = await getAllCart()
  rediret(res)
  return (
    <Mycart res={res}/>
  )
}

export default Cart

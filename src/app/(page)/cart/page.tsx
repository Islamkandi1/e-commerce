
import Mycart from '@/app/_components/myCart/Mycart';
import { rediret } from '@/redirectUser';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "My Cart",
  description: "This is my cart page",
};


const Cart = async () => {
  rediret()
  return (
    <Mycart />
  )
}

export default Cart

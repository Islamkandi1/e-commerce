
import Mycart from '@/app/_components/myCart/Mycart';
import { rediret } from '@/redirectUser';



const Cart = async () => {
  rediret()
  return (
    <Mycart />
  )
}

export default Cart

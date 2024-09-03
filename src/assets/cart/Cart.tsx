
import { useContext } from 'react'
import Button from '../../components/Button/Button'
import CartItem from '../../components/cartItem/CartItem'
import Container from '../../components/container/Container'
import { useShoppingCartContext } from '../../context/ShopingCartContext'



export default function Cart() {
  const {cartItems}=useShoppingCartContext();

  
  

  return (
   <div >
    <Container>
      <div >
        {
          cartItems.map(item=>(
            <CartItem {...item}/>

          ))
        }

      </div>
      <div className='bg-slate-100'>
        <p>Price: 1,600</p>
        <p>Offert: 200</p>
        <p>Total: 800 </p>
      </div>

      <Button variant='success'>
        Order
      </Button>

    </Container>
   </div>
  )
}

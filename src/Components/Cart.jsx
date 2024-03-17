import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { removeProduct } from '../Features/Cart/CartSlice';

function Cart() {
  const productCart = useSelector(state => state.cart)
  const dispatch = useDispatch([])

  const removeCart = (id) => {
    dispatch(removeProduct(id))
    console.log("removed")
  }

  const cards = productCart.map(product  => (
    <div className='border-2 border-gray-300 rounded-xl'>
         <Card className='flex items-center justify-between gap-3 sm:w-[50rem] sm:h-[12rem] w-[20rem] h-[7rem] px-10'>
            <div className="text-center h-[10vw] w-[10vw]">
            <Card.Img variant="top" src={product.image} style={{width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover"}}/>

            </div>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                INR : {product.price}
                </Card.Text>             
            </Card.Body>
             <div className='relative top-5 '>
             <Button variant="primary" className='bg-red-600 hover:bg-red-400 px-5 py-2 rounded-xl text-white font-semibold' onClick={()=> removeCart(product.id)}>Remove</Button>
             </div>
         </Card>
    </div>
));
  return (
    <div className='sm:mt-[7vw] mt-[25vw] ml-[5vw]'>
     {productCart.length === 0 ? 
      <h2 className='sm:text-[3vw] text-[4vw] sm:top-0 top-[20vw] font-semibold flex items-center justify-center'>This cart is empty</h2>
         :
      <div className='flex flex-wrap gap-3'>
      {cards}
    </div>
     }
    </div>
  )
}

export default Cart

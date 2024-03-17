import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addProduct } from '../Features/Cart/CartSlice';

function Categories() {
  const dispatch = useDispatch([]);
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/categories")
        .then(data => data.json())
        .then(result => setProducts(result))
    }, []);

    const addToCart = (product) => {
      dispatch(addProduct(product))
      console.log("pressed")
    }

    const cards = products.map(product  => (
        <div className='border-2 w-fit'>
             <Card style={{ width: '18rem', height: "25rem"}}>
                <div className="text-center">
                <Card.Img variant="top" src={product.image} style={{width: "250px", height: "200px"}}/>

                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                    INR : {product.price}
                    </Card.Text>             
                </Card.Body>
                 <div className='relative top-5 '>
                 <Button variant="primary" className='bg-blue-600 px-5 py-2 rounded-xl hover:bg-blue-400 text-white font-semibold' onClick={()=> addToCart(product)}>Add To Cart</Button>
                 </div>
             </Card>
        </div>
    ));
    
  return (
    <div className='mt-20'>
      {/* <h1 className='font-semibold text-[3vw]'>Products</h1> */}
      <div className='col-md-3 w-full gap-3 flex flex-wrap'>
          {cards} 
      {/*  {JSON.stringify(products)} */}
      </div>
    </div>
  )
}

export default Categories

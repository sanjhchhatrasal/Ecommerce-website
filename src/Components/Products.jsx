import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addProduct } from '../Features/Cart/CartSlice';

function Products() {
  const dispatch = useDispatch([]);
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://api.pujakaitem.com/api/products")
        .then(data => data.json())
        .then(result => setProducts(result))
    }, []);

    const addToCart = (product) => {
      dispatch(addProduct(product))
      console.log("pressed")
    }

    const cards = products.map(product  => (
        <div className='border-2 w-fit'>
             <Card style={{ width: '18rem', height: "20rem"}} className='text-center'>
                <div className="text-center w-[200px] h-[150px] object-cover mb-10">
                <Card.Img variant="top" src={product.image} style={{width: "100%", height: "100%"}} className='my-5 mx-10'/>

                </div>
                <Card.Body>
                    <Card.Title className='mx-3'>{product.title}</Card.Title>
                    <Card.Text>
                    {product.name}
                    </Card.Text>  
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
    <div className='relative sm:top-[8vw] top-[25vw] mx-[5vw] ml-[10vw] sm:h-[180vh] mb-14'>
      {/* <h1 className='font-semibold text-[3vw]'>Products</h1> */}
      <div className='col-md-3 w-full sm:gap-10 gap-5 flex flex-wrap'>
          {cards} 
      {/*  {JSON.stringify(products)} */}
      </div>
    </div>
  )
}

export default Products

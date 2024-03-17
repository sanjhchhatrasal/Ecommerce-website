import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Products from './Components/Products.jsx'
import Cart from './Components/Cart.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Home from './Components/Home.jsx'

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='cart' element={<Cart/>}/>
      <Route path='products' element={<Products />} />
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={routes}/>
  </React.StrictMode>,
)

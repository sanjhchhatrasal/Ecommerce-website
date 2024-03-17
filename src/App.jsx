
import './App.css'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar'
import { Provider } from 'react-redux'
import { Store } from './App/Store'
import Footer from './Components/Footer'

function App() {
  const location = useLocation();

  const excludedRoutes = ['/cart'];

  const shouldRenderFooter = location.pathname !== '/cart';


  return (
    <Provider store={Store}>
    <Navbar />
     <Outlet/>
     {shouldRenderFooter && <Footer />} {/* Conditionally render the footer */}
    </Provider>
  )
}

export default App

import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home  from './page/Home'
import AllFragance from './page/AllFragrance'
import Menu from './components/NavBar'
import SideNav from './components/SideNav'
import CartEmpty from './page/Chart'
import { ToastContainer } from 'react-toastify'
import SignUp from './page/SignUp'
import CustomerDetails from './components/CustomerDetails'
import CartItems from './components/CartItems'
import Order from './page/Order'
import Newarrival from './page/Newarrival'
import DetailPage from './page/DetailPage'
import Login from './page/Login'
import Breadcrumbs from './components/NABreadcCumbs'
import Footer from './components/Footer'

// WARNING: Do Not change anything in this page.

function App() {

  return (
    <>
    <Router>
    <Menu/>
    <SideNav/>
    {/* <Breadcrumbs/>   */}
    <ToastContainer/>
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/all-fragrances' element={<AllFragance/>}/>        
        <Route path='/cart-empty' element={<CartEmpty/>}/> 
        <Route path='/signup' element={<SignUp/>}/> 
        <Route path='/login' element={<Login/>}/> 
        <Route path='/customer-details' element={<CustomerDetails/>}/>        
        <Route path='/cart' element={<CartItems/>}/>        
        <Route path='/order' element={<Order/>}/>        
        <Route path='/new-arrivals' element={<Newarrival/>}/>        
        <Route path='/detail/:productId' element={<DetailPage/>}/>        
      </Routes>  
    </Router>
    {/* <Footer/> */}

    </>
    
  )
}

export default App

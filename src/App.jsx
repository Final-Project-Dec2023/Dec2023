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
<<<<<<< HEAD
        {/* <Route path='/detail' element={<DetailPage/>}/>         */}
      </Routes>
=======
        <Route path='/detail/:productId' element={<DetailPage/>}/>        
      </Routes>  
>>>>>>> 01e7117d7f8d35b34d78550ebe96541df77a7e2c
    </Router>
    </>
  )
}

export default App

import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home  from './pages/Home'
import AllFragance from './pages/AllFragrance'
import Menu from './components/NavBar'
import SideNav from './components/SideNav'
import CartEmpty from './pages/Chart'
import { ToastContainer } from 'react-toastify'
import SignUp from './pages/SignUp'
import CustomerDetails from './components/CustomerDetails'
import CartItems from './components/CartItems'
import Order from './pages/Order'
import Newarrival from './pages/Newarrival'
import DetailPages from './pages/DetailPage'
import Login from './pages/Login'
import Breadcrumbs from './components/NABreadcCumbs'
import Footer from './components/Footer'
import Search from './pages/Search'
import UserDashboard from './pages/dashboard/User'
import AdminDashboard from './pages/dashboard/Admin'
import { ScrollToTop } from './components/utils/SmoothScrollToTop'
import AdminRoutes from './pages/routes/AdminRoute'
import { useAuth } from './contexts/Auth'

// WARNING: Do Not change anything in this pages.

function App() {
  const {PrivateRoutes} = useAuth();

  return (
    <>
    <Router>
    <Menu/>
    <SideNav/>
    {/* <Breadcrumbs/>   */}
    <ScrollToTop/>
    <ToastContainer/>
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/all-fragrances' element={<AllFragance/>}/>        
        <Route path='/cart-empty' element={<CartEmpty/>}/> 
        <Route path='/signup' element={<SignUp/>}/> 
        <Route path='/login' element={<Login/>}/> 
        <Route path='/customer-details' element={<CustomerDetails/>}/>        
        <Route path='/cart' element={<CartItems/>}/>        
        <Route path='/new-arrivals' element={<Newarrival/>}/>        
        <Route path='/detail/:productId' element={<DetailPages/>}/>        
        <Route path='/search' element={<Search/>}/>        

        {/* PRIVATE ROUTES */}
        <Route path='/' element={<AdminRoutes/>}>
        <Route path='/dashboard/admin' element={<AdminDashboard/>}/>
        </Route>
        <Route path='/' element={<PrivateRoutes/>}>
        <Route path='/dashboard/user' element={<UserDashboard/>}/>        
        <Route path='/order' element={<Order/>}/>        
        </Route>
      </Routes>  
      {/* <Footer/> */}
    </Router>

    </>
    
  )
}

export default App

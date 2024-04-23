import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../css/Nav.css"
import Logo from "../assets/images/Frame 579.png"
import Profileimg from "../assets/icons/humprofile.png"
import Cartimg from "../assets/icons/blackcart.png"
import Seicon from "../assets/icons/Vector (5).png"
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { useAuth } from '../contexts/Auth';




function Menu() {
  const { auth, setAuth } = useAuth();

  const logout = ()=>{
    setAuth({...auth, auth: null, token: ""})

    //remove user data from local storage
    localStorage.removeItem("auth");
    console.log("Logout Successfully");
  }
  console.log(auth);

  return (
    <>
    <div className='sticky-top header'>
      <div className="top-nav">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt=""/>
          </Link>
        </div>
        <div className="search-sec">
           <input type="text" placeholder="search" className='search d-md-none d-lg-block'/> 
           <div className='select-container'>
              <span>
                <button>
                  <img src={Seicon} alt="" />
                </button>
              </span>
             </div>
        </div>
        
        <div className='profile-con'>
        <div className="profile">
              <div className='pro-img'>
               <img src={Profileimg} alt="" />
              </div>
             <div className='select-container'>
            <Dropdown>
               <Dropdown.Toggle variant="light" id="dropdown-basic">
               {auth?.user? auth.user.name : "My Account"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                 {!auth.user ? (
                 <>
                <Dropdown.Item href="#/action-1" className='first-drop'>
                <Link to="/login">
                Login
                </Link>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1" className='first-drop'>
                <Link to="/signup">
                Sign Up
                </Link>
              </Dropdown.Item>
                 </>
                 ) : (
                  <>
              <Dropdown.Item href="#/action-1">My Account</Dropdown.Item>
              <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                  </>
                 )}
              </Dropdown.Menu>
              </Dropdown>
             </div>
        </div>

        <div className="cart-sec">
          <Link to="/cart">
          <img src={Cartimg} alt="" />
          </Link>
        </div>
        </div>
        </div>

    <Navbar expand="lg" className="bg-body-primary fs-5" id='bottom'>
      <Container className=''>
        <Navbar.Collapse id="basic-navbar-nav">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Nav className="me-auto">
            <Nav.Link href="/" className='text-white'>Home</Nav.Link>
            <Nav.Link href="/all-fragrances" className='text-white'>All Fragrance</Nav.Link>
            <NavDropdown className='dropp text-white' id="basic-nav-dropdown" title="All Brands" >
              <NavDropdown.Item href="#action/3.1">Adidas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Armaf</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Armani</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Calvin klein</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Dior</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Dolce & Gabbana</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Essenza</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Giorgio Armani</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Hugo Boss</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">jimmy Choo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Lattafa</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Mont Blanc</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Ralph Lauren</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Versace</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Yves Saint Laurent</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Zaien</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/new-arrivals" className='text-white'>New Arrival</Nav.Link>               
            <Nav.Link href="/blog" className='text-white'>Blog</Nav.Link>               
            <Nav.Link href="/contact" className='text-white'>Contact Us</Nav.Link>               
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </>

  );
}

export default Menu;

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import Home from './home';
import ProductPage from './productPage';

export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' style={{backgroundColor:'rgb(1, 1, 63)'}}>
      <MDBContainer fluid>
      <img src="/images/cart.png" alt="loading" height="30px" width="30px" />
        <MDBNavbarBrand style={{color:'white'}} href='#'>E-Commerce Store</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0' style={{justifyContent:'center'}}>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page'>
                <Link to='/' style={{color:'white'}}> Home </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink> <Link to='/products' style={{color:'white'}}> Products </Link></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink><Link to='/cart' style={{color:'white'}}> Cart </Link></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink><Link to='/contact' style={{color:'white'}}> Contact Us </Link></MDBNavbarLink>
            </MDBNavbarItem>


            {/* <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button' style={{color:'white'}}>
                  Dropdown
                </MDBDropdownToggle>
                <MDBDropdownMenu style={{color:'white'}}>
                  <MDBDropdownItem link>Action</MDBDropdownItem>
                  <MDBDropdownItem link>Another action</MDBDropdownItem>
                  <MDBDropdownItem link>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                Disabled
              </MDBNavbarLink>
            </MDBNavbarItem> */}
          </MDBNavbarNav>

          <form className='d-flex input-group w-auto' style={{justifyContent:'center'}}>
            {/* <input type='search' className='form-control' placeholder='Type query' aria-label='Search'/> */}
            <Link to='/login' style={{color:'white'}}>
            <MDBBtn outline color='success' style={{marginLeft:'30px', marginRight:'10px', borderRadius:'5px'}}> Login </MDBBtn>
            </Link>
            <Link to='/signup' style={{color:'white'}}>
            <MDBBtn outline color='success' style={{marginLeft:'30px', marginRight:'10px', borderRadius:'5px'}}> Register </MDBBtn>
            </Link>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
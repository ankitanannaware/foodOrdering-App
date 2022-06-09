import React from 'react';
import { Link } from 'react-router-dom';
import {Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap';
const Layout2 = (props) => (
  <div>
     <div className="mt-3 ">
        <Navbar color="light" light expand="md">
        <div>
        <NavbarBrand><Link style={{marginLeft:"550px" ,fontSize:"30px",color:"black"}} to="/">ORDER-FOOD</Link></NavbarBrand>
        </div>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link style={{marginRight:"60px",fontSize:"20px"}} to="/cart">CART</Link>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
      <div>{props.children}</div>
  </div>
);

export default Layout2;
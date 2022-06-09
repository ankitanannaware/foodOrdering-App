import React from 'react';
import { Link } from 'react-router-dom';
import { DropdownToggle, Nav, Navbar, NavbarBrand, NavItem, UncontrolledDropdown,DropdownMenu,DropdownItem } from 'reactstrap';
const Layout1 = (props) => (
  <div>
     <div className="mt-3 ">
        <Navbar color="light" light expand="md">
        <NavbarBrand><Link to="/home">FOOD DELIVERY</Link></NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/login" style={{marginRight:"50px"}}>SIGN IN</Link>
            </NavItem>
            <NavItem >
              <Link to="/register" style={{marginRight:"50px"}}>SIGN UP</Link>
            </NavItem>
            
          </Nav>
      </Navbar>
    </div>
      <div>{props.children}</div>
  </div>
);

export default Layout1;
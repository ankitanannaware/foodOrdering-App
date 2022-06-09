import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavItem, UncontrolledDropdown } from "reactstrap";




const Header=()=>{
   const navigate = useNavigate();
    const [user, setUser] = useState(null);
    useEffect(() => {
       const user = localStorage.getItem('loggedInUser');
       if(user){
           const parsedUser = JSON.parse(user)
           setUser(parsedUser)
       }
    }, [navigate]);
    const logout = () => {
        localStorage.removeItem("loggedInUser");
        setUser(null);
        navigate("/login")
    }

   return (
   
      <div>
        <div className="mt-3 ">
        <Navbar color="light" light expand="md">
        <NavbarBrand><Link to="/home">FOOD DELIVERY</Link></NavbarBrand>
          <Nav className="ml-auto" navbar>
            {!user && <NavItem>
              <Link to="/login" style={{marginRight:"50px"}}>SIGN IN</Link>
            </NavItem>}
            {/* <NavItem >
              <Link to="/register" style={{marginRight:"50px"}}>SIGN UP</Link>
            </NavItem> */}
            {user && <UncontrolledDropdown nav inNavbar>
                     <DropdownToggle nav caret className="link">
                        {user.username}
                     </DropdownToggle>
                     <DropdownMenu right>
                        <DropdownItem onClick={logout}>Logout</DropdownItem>
                     </DropdownMenu>
                  </UncontrolledDropdown>}
            
          </Nav>
      </Navbar>
    </div>
      </div>
   
   );
};


export default Header
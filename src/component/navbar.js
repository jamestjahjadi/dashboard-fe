import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import {Link  } from 'react-router-dom'


const NavbarDashboard = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  var currentTime = new Date().toISOString().slice(0, 10);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Dashboard</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
            <Link to='/summary'><NavLink>Summary Report</NavLink></Link>
            </NavItem>
            <NavItem>
            <Link to='/monthly'> <NavLink>Monthly Report</NavLink></Link>
            </NavItem>
          </Nav>
        </Collapse>
        {currentTime}
      </Navbar>
     
    </div>
  );
}

export default NavbarDashboard;
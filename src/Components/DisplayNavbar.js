import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem} from 'reactstrap';
import { Link, NavLink } from 'react-router-dom'


const DisplayNavbar = (props) => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  let cartLength= props.cart.length;
  if (cartLength <1){
    cartLength=null;
  }

  return (
    <div>
      <Navbar light expand="md" className='navigationDisplay'>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <Link  to='/' className="mt-2"><i className="fa fa-home fa-lg" /></Link>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Products
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to='/directory'>Capsules</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to='/powders'>Powders</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink to='/guide' className="nav-link">FAQs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/contactus' className="nav-link">Contact Us</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <Nav navbar> 
            <Link to='/shoppingcart'>
                My Cart <span className="badge badge-secondary mx-1">{cartLength}</span>
            </Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default DisplayNavbar;




import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Link, NavLink } from 'react-router-dom'



class DisplayNavbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isNavOpen: false,
    }
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    })
  }

  

  render() {

    //updates the cart length
    let cartLength = 0
    for (let i = 0; i < this.props.cart.length; i++) {
      cartLength += this.props.cart[i].quanity
    }
    if (cartLength < 1) {
      cartLength = null;
    }



    return (
      <div>
        <Navbar light expand="md" className='navigationDisplay'>
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav className="mr-auto" navbar>
              <Link to='/' className="mt-2"><i className="fa fa-home fa-lg" /></Link>
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
            <Nav>
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default DisplayNavbar;





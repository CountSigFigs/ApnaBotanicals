import React, { Component } from 'react';
import {
  Button,
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

    //displays items in dropdown cart
    const displayItems = this.props.cart.map(item => {
      return (
        <li key={item.id} className="list-group-item d-flex justify-content-between">
          <div className="my-0">
            <small>{item.name}</small>
          </div>
        </li>
      )
    })


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
            <NavItem className='mr-4'>
            <UncontrolledDropdown>
              <DropdownToggle nav id='dropDownMenu'>
                <i class="fa fa-shopping-cart"></i> Cart <span class="badge badge-light ml-1">{cartLength}</span>
              </DropdownToggle>
                <DropdownMenu left id="shoppingCartDropDown">
                  <div className='container'>
                    <div className='row shoppingCart'>
                      <div className='shopping-cart-header'>
                      <i class="fa fa-shopping-cart cart-icon"></i>Cart<span class="badge">{cartLength}</span>
                        <span class="lighter-text float-right">Total:</span>
                      </div>
                        <DropdownItem>
                          <Link to='/shoppingcart'><Button>Checkout</Button></Link>
                        </DropdownItem>
                    </div>
                  </div>
                </DropdownMenu>
              </UncontrolledDropdown>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default DisplayNavbar;





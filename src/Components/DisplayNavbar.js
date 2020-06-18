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

    //total amount
    let total= cartLength * 10;

    //displays items in dropdown cart
    const displayItems = this.props.cart.map(item => {
      return (
        <li key={item._id} style={{listStyle:'none'}} className='my-2'>
          <small><img src={item.image} style={{height:50}} className='mr-2' alt={item.name} />{item.name}</small><small className='float-right mt-3'>Qty: {item.quanity}</small>
        </li>
      )
    })

    return (
      <div>
        <Navbar light expand="md" className='navigationDisplay'>
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav className="mr-auto" navbar>
              <Link to='/' className="mt-2"><i className="fa fa-home fa-lg" id='home' /></Link>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Products
              </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink to='/directory'>Capsules</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink to='/powders'>Powders</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink to='/guide' className="nav-link">FAQs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/contactus' className="nav-link">Contact Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/users' className="nav-link">Login</NavLink>
              </NavItem>
            </Nav>
            <Nav>
            <NavItem className='mr-4'>
            <UncontrolledDropdown>
              <DropdownToggle nav id='dropDownMenu'>
                <i className="fa fa-shopping-cart"></i> Cart <span className="badge badge-light ml-1">{cartLength}</span>
              </DropdownToggle>
                <DropdownMenu left='true' id="shoppingCartDropDown">
                  <div className='container'>
                    <div className='row shoppingCart'>
                      <div className='shopping-cart-header'>
                      <i className="fa fa-shopping-cart cart-icon"></i>Cart<span className="badge">{cartLength}</span>
                        <span className="lighter-text float-right">Total: ${total}</span>
                      </div>
                      <div className='shopping-items' style={{width:300}}>
                      <ul>
                        {displayItems}
                      </ul>
            
                      </div>
                       <DropdownItem>
                          <Link to='/shoppingcart' className='btn'>Checkout</Link>
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





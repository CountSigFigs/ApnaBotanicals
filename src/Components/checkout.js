import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button, FormFeedback } from 'reactstrap'
import { Link }  from 'react-router-dom';

class Checkout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      billingFirstName: '',
      billingLastName: '',
      billingPhoneNum: '',
      billingEmail: '',
      billingAddress: '',
      billingCity: '',
      billingState: '',
      billingZipCode: '',
      shippingFirstName: '',
      shippingLastName: '',
      shippingAddress: '',
      shippingCity: '',
      shippingState: '',
      shippingZipCode: '',
      paymentName: '',
      paymentNum: '',
      ccExpiration: '',
      ccCVV: '',
      touched: {
        billingFirstName: false,
        billingLastName: false,
        billingPhoneNum: false,
        billingEmail: false,
        billingAddress: false,
        billingCity: false,
        billingState: false,
        billingZipCode: false,
        shippingFirstName: false,
        shippingLastName: false,
        shippingAddress: false,
        shippingCity: false,
        shippingState: false,
        shippingZipCode: false,
        paymentName: false,
        paymentNum: false,
        ccExpiration: false,
        ccCVV: false
      }
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckboxChange= this.handleCheckboxChange.bind(this);
  }
  
  handleCheckboxChange = () => {
    this.setState({
        shippingFirstName: this.state.billingFirstName,
        shippingLastName: this.state.billingLastName,
        shippingAddress: this.state.billingAddress,
        shippingCity: this.state.billingCity,
        shippingState: this.state.billingState,
        shippingZipCode: this.state.billingZipCode
    })
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  validate(billingFirstName,
    billingLastName,
    billingPhoneNum,
    billingEmail,
    billingAddress,
    billingCity,
    billingState,
    billingZipCode,
    shippingFirstName,
    shippingLastName,
    shippingAddress,
    shippingCity,
    shippingState,
    shippingZipCode,
    paymentName,
    paymentNum,
    ccExpiration,
    ccCVV) {

    const errors = {
      billingFirstName: '',
      billingLastName: '',
      billingPhoneNum: '',
      billingEmail: '',
      billingAddress: '',
      billingCity: '',
      billingState: '',
      billingZipCode: '',
      shippingFirstName: '',
      shippingLastName: '',
      shippingAddress: '',
      shippingCity: '',
      shippingState: '',
      shippingZipCode: '',
      paymentName: '',
      paymentNum: '',
      ccExpiration: '',
      ccCVV: ''
    };

    if (this.state.touched.billingFirstName) {
      if (billingFirstName.length < 1) {
        errors.billingFirstName = 'Please enter your first name.';
      }
    }

    if (this.state.touched.shippingFirstName) {
      if (shippingFirstName.length < 1) {
        errors.shippingFirstName = 'Please enter your first name.';
      }
    }

    if (this.state.touched.paymentName) {
      if (paymentName.length < 1) {
        errors.paymentName = 'Please enter your first name.';
      }
    }

    if (this.state.touched.billingLastName) {
      if (billingLastName.length < 1) {
        errors.billingLastName = 'Please enter your last name.'
      }
    }

    if (this.state.touched.shippingLastName) {
      if (shippingLastName.length < 1) {
        errors.shippingLastName = 'Please enter your last name.'
      }
    }

    const reg = /^\d+$/;

    if (this.state.touched.ccExpiration) {
      if (ccExpiration.length !== 4 || !reg.test(ccExpiration)) {
        errors.ccExpiration = 'Card Expiration should only be 4 digits long'
      }
    }

    if (this.state.touched.ccCVV) {
      if (ccCVV.length !== 3 || !reg.test(ccCVV)) {
        errors.ccCVV = 'CVV should be only three digits long'
      }
    }

    if (this.state.touched.billingPhoneNum && billingPhoneNum.length < 10 && !reg.test(billingPhoneNum)) {
      errors.billingPhoneNum = 'The phone number should contain ten numbers.';
    }

    if (this.state.touched.billingZipCode) {
      if (billingZipCode.length < 5 || billingZipCode.length > 5 || !reg.test(billingZipCode)) {
        errors.billingZipCode = 'Zip Code should only contain numbers and be five digits long.'
      }
    }

    if (this.state.touched.paymentNum) {
      if (paymentNum.length < 16 || paymentNum.length > 16 || !reg.test(paymentNum)) {
        errors.paymentNum = 'Payment number should only contain numbers and be 16 digits long.'
      }
    }

    if (this.state.touched.shippingZipCode) {
      if (shippingZipCode.length !== 5 || !reg.test(shippingZipCode)) {
        errors.shippingZipCode = 'Zip Code should only contain numbers and be five digits long'
      }
    }

    if (this.state.touched.billingEmail && !billingEmail.includes('@')) {
      errors.billingEmail = 'Email should contain a @';
    }

    if (this.state.touched.billingAddress) {
      if (billingAddress.length < 3) {
        errors.billingAddress = 'Please enter a valid address'
      }
    }

    if (this.state.touched.shippingAddress) {
      if (shippingAddress.length < 3) {
        errors.shippingAddress = 'Please enter a valid address'
      }
    }

    if (this.state.touched.billingCity) {
      if (billingCity.length < 2) {
        errors.billingCity = 'Please enter a valid city'
      }
    }

    if (this.state.touched.shippingCity) {
      if (shippingCity.length < 2) {
        errors.shippingCity = 'Please enter a valid city'
      }
    }

    if (this.state.touched.billingState) {
      if (billingState.length !== 2) {
        errors.billingState = 'Please use the abbrievated verison of the state you live in.'
      }
    }

    if (this.state.touched.shippingState) {
      if (shippingState.length !== 2) {
        errors.shippingState = 'Please use the abbrievated verison of the state you live in.'
      }
    }

    return errors;
  }

  handleBlur = (field) => () => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  }

  handleSubmit(event) {
    alert('Current state is: ' + JSON.stringify(this.state));
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
   
    const errors = this.validate(this.state.billingFirstName,
      this.state.billingLastName,
      this.state.billingPhoneNum,
      this.state.billingEmail,
      this.state.billingAddress,
      this.state.billingCity,
      this.state.billingState,
      this.state.billingZipCode,
      this.state.shippingFirstName,
      this.state.shippingLastName,
      this.state.shippingAddress,
      this.state.shippingCity,
      this.state.shippingState,
      this.state.shippingZipCode,
      this.state.paymentName,
      this.state.paymentNum,
      this.state.ccExpiration,
      this.state.ccCVV
    );
    
    let price = 0;
    for (let i=0; i<this.props.cart.length; i++){
      price += this.props.cart[i].quanity
    }
    price = price * 10;
    let tax = price * 0.065;
    let taxes = tax.toFixed(2)
    let total = (price + tax).toFixed(2);

    const displayItems = this.props.cart.map(item => {
      return (
        <li key={item._id} className="list-group-item d-flex justify-content-between">
          <div className="my-0">
            <h6>{item.name}</h6>
            <small className="muted">{item.type}  Qty:{item.quanity}</small>
          </div>
          <span className="muted">${item.quanity * 10}</span>
        </li>
      )
    })
    
    return (
      <div className="container">
        <div className="row">
          <div className="col text-center my-2">
            <i className="fa fa-leaf fa-4x mt-1"></i>
            <h2> Apna Botanicals Checkout</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-8">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup className="row">
                <div className="col-8 mb-1">
                  <h4>Billing Address</h4>
                </div>
                <div className="col-12 col-md-6">
                  <Label htmlFor="billingFirstName">First Name</Label>
                  <Input
                    type="text"
                    id="billingFirstName"
                    name="billingFirstName"
                    placeholder="First Name"
                    value={this.state.billingFirstName}
                    invalid={errors.billingFirstName}
                    onBlur={this.handleBlur("billingFirstName")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.billingFirstName}</FormFeedback>
                </div>
                <div className="col">
                  <Label htmlFor="billingLastName">Last Name</Label>
                  <Input
                    type="text"
                    id="billingLastName"
                    name="billingLastName"
                    placeholder="Last Name"
                    value={this.state.billingLastName}
                    invalid={errors.billingLastName}
                    onBlur={this.handleBlur("billingLastName")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.billingLastName}</FormFeedback>
                </div>
              </FormGroup>
              <FormGroup className="row">
                <div className="col-12 col-md-6">
                  <Label htmlFor="billingEmail">Email</Label>
                  <Input
                    type="text"
                    id="billingEmail"
                    name="billingEmail"
                    placeholder="Email"
                    value={this.state.billingEmail}
                    invalid={errors.billingEmail}
                    onBlur={this.handleBlur("billingEmail")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.billingEmail}</FormFeedback>
                </div>
                <div className="col">
                  <Label htmlFor="billingPhoneNum">Phone Number</Label>
                  <Input
                    type="tel"
                    id="billingPhoneNum"
                    name="billingPhoneNum"
                    placeholder="Phone Number"
                    value={this.state.billingPhoneNum}
                    invalid={errors.billingPhoneNum}
                    onBlur={this.handleBlur("billingPhoneNum")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.billingPhoneNum}</FormFeedback>
                </div>
              </FormGroup>
              <FormGroup className="row">
                <div className="col-12">
                  <Label htmlFor="billingAddress">Address</Label>
                  <Input
                    type="text"
                    id="billingAddress"
                    name="billingAddress"
                    placeholder="Street Address"
                    value={this.state.billingAddress}
                    invalid={errors.billingAddress}
                    onBlur={this.handleBlur("billingAddress")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.billingAddress}</FormFeedback>
                </div>
              </FormGroup>
              <FormGroup className="row">
                <div className="col-12 col-md-4">
                  <Label htmlFor="billingCity">City</Label>
                  <Input
                    type="text"
                    id="billingCity"
                    name="billingCity"
                    placeholder="City"
                    value={this.state.billingCity}
                    invalid={errors.billingCity}
                    onBlur={this.handleBlur("billingCity")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.billingCity}</FormFeedback>
                </div>
                <div className="col">
                  <Label htmlFor="billingState">State</Label>
                  <Input
                    type="text"
                    id="billingState"
                    name="billingState"
                    placeholder="State"
                    value={this.state.billingState}
                    invalid={errors.billingState}
                    onBlur={this.handleBlur("billingState")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.billingState}</FormFeedback>
                </div>
                <div className="col">
                  <Label htmlFor="billingZipCode">Zip Code</Label>
                  <Input
                    type="tel"
                    id="billingZipCode"
                    name="billingZipCode"
                    placeholder="Zip Code"
                    value={this.state.billingZipCode}
                    invalid={errors.billingZipCode}
                    onBlur={this.handleBlur("billingZipCode")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.billingZipCode}</FormFeedback>
                </div>
              </FormGroup>
              <hr />
              <h4 className="mt-2">Shipping Address</h4>
              <FormGroup check>
                <Input 
                  type="checkbox" 
                  value="shippingSameAsBilling" 
                  id="shippingSameAsBilling" 
                  onChange={this.handleCheckboxChange}
                />
                <Label check for="shippingSameAsBilling"> Shipping Address Same as Billing</Label>
              </FormGroup>
              <FormGroup className="row mt-3">
                <div className="col-12 col-md-6">
                  <Label htmlFor="shippingFirstName">First Name</Label>
                  <Input
                    type="text"
                    id="shippingFirstName"
                    name="shippingFirstName"
                    placeholder="First Name"
                    value={this.state.shippingFirstName}
                    invalid={errors.shippingFirstName}
                    onBlur={this.handleBlur("shippingFirstName")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.shippingFirstName}</FormFeedback>
                </div>
                <div className="col">
                  <Label htmlFor="shippingLasName">Last Name</Label>
                  <Input
                    type="text"
                    id="shippingLastName"
                    name="shippingLastName"
                    placeholder="Last Name"
                    value={this.state.shippingLastName}
                    invalid={errors.shippingLastName}
                    onBlur={this.handleBlur("shippingLastName")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.shippingLastName}</FormFeedback>
                </div>
              </FormGroup>
              <FormGroup className="row">
                <div className="col-12">
                  <Label htmlFor="shippingAddress">Address</Label>
                  <Input
                    type="text"
                    id="shippingAddress"
                    name="shippingAddress"
                    placeholder="Street Address"
                    value={this.state.shippingAddress}
                    invalid={errors.shippingAddress}
                    onBlur={this.handleBlur("shippingAddress")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.shippingAddress}</FormFeedback>
                </div>
              </FormGroup>
              <FormGroup className="row">
                <div className="col-12 col-md-4">
                  <Label htmlFor="shippingCity">City</Label>
                  <Input
                    type="text"
                    id="shippingCity"
                    name="shippingCity"
                    placeholder="City"
                    value={this.state.shippingCity}
                    invalid={errors.shippingCity}
                    onBlur={this.handleBlur("shippingCity")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.shippingCity}</FormFeedback>
                </div>
                <div className="col">
                  <Label htmlFor="shippingState">State</Label>
                  <Input
                    type="text"
                    id="shippingState"
                    name="shippingState"
                    placeholder="State"
                    value={this.state.shippingState}
                    invalid={errors.shippingState}
                    onBlur={this.handleBlur("shippingState")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.shippingState}</FormFeedback>
                </div>
                <div className="col">
                  <Label htmlFor="shippingZipCode">Zip Code</Label>
                  <Input
                    type="tel"
                    id="shippingZipCode"
                    name="shippingZipCode"
                    placeholder="Zip Code"
                    value={this.state.shippingZipCode}
                    invalid={errors.shippingZipCode}
                    onBlur={this.handleBlur("shippingZipCode")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.shippingZipCode}</FormFeedback>
                </div>
              </FormGroup>
              <hr />
              <FormGroup tag="fieldset">
                <legend><h4>Payment Method</h4></legend>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" value="credit" />{' '} Credit Card         
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" value="debit" />{' '} Debit Card
                  </Label>
                </FormGroup>
              </FormGroup>
              <FormGroup className="row mt-3">
                <div className="col-12 col-md-6">
                  <Label htmlFor="paymentName">Name on Card</Label>
                  <Input
                    type="text"
                    id="paymentName"
                    name="paymentName"
                    value={this.state.paymentName}
                    invalid={errors.paymentName}
                    onBlur={this.handleBlur("paymentName")}
                    onChange={this.handleInputChange}
                  />
                  <small className="text-muted">Full name as displayed on card</small>
                  <FormFeedback>{errors.paymentName}</FormFeedback>
                </div>
                <div className="col-12 col-md-6">
                  <Label htmlFor="paymentNum">Card Number</Label>
                  <Input
                    type="tel"
                    id="paymentNum"
                    name="paymentNum"
                    value={this.state.paymentNum}
                    invalid={errors.paymentNum}
                    onBlur={this.handleBlur("paymentNum")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.paymentNum}</FormFeedback>
                </div>
              </FormGroup>
              <FormGroup className="row">
                <div className="col-md-3">
                  <Label htmlFor="ccExpiration">Expiration</Label>
                  <Input
                    type="text"
                    id="ccExpiration"
                    name="ccExpiration"
                    value={this.state.ccExpiration}
                    invalid={errors.ccExpiration}
                    onBlur={this.handleBlur("ccExpiration")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.ccExpiration}</FormFeedback>
                </div>
                <div className="col-md-3 mb-3">
                  <Label htmlFor="ccCV">CVV</Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="ccCVV"
                    name="ccCVV"
                    value={this.state.ccCVV}
                    invalid={errors.ccCVV}
                    onBlur={this.handleBlur("ccCVV")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.ccCVV}</FormFeedback>
                </div>
              </FormGroup>
              <Link to='./submission'><Button className="btn btn-lg mb-3" type="submit" onClick={() => {console.log(this.state)}}>Submit Order</Button></Link>
            </Form>
          </div>
          <div className="col">
            <h4>Cart Items</h4>
            <ul className='list-group mt-1'>
              {displayItems}
              <li className="list-group-item d-flex justify-content-lg-between">
                <div className="my-0">
                  <h6>Price</h6>
                </div>
                <span>${price}</span>
              </li>
              <li className="list-group-item d-flex justify-content-lg-between">
                <div className="my-0">
                  <h6>Taxes</h6>
                </div>
                <span>${taxes}</span>
              </li>
              <li className="list-group-item d-flex justify-content-lg-between">
                <div className="my-0">
                  <h6>Total</h6>
                </div>
                <span>${total}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}



export default Checkout;

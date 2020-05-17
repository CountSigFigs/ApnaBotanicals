import React, { Component } from 'react';
import { Table, Button } from 'reactstrap'
import { Link } from 'react-router-dom';

class RenderCartItems extends Component{

    componentDidMount() {
        window.scrollTo(0, 0);
      }
      
    render () {

        let totalQuanity=0

        for (let i=0; i< this.props.cart.length; i++){
            totalQuanity+= this.props.cart[i].quanity
        }

        let price= totalQuanity * 10;
        let tax= price * 0.065;
        let taxes= tax.toFixed(2)
        let total= (price + tax).toFixed(2);

        const displayItems= this.props.cart.map(item =>{

            let totalPrice= item.quanity * item.price;
                return (
                    <tr key={item.id}>
                            <td><img src={item.image} alt='product' height='100px'/></td>
                            <td>{item.name}</td>
                            <td>{item.type}</td>
                            <td>{item.quanity}</td>
                            <td>${totalPrice}</td>
                            <td>
                                 <i class="fa fa-minus-circle fa-2x mr-2" onClick={() => this.props.onClick(item)}></i>
                                <i className="fa fa-plus-circle fa-2x" onClick={() => this.props.handleClick(item)} />                       
                            </td>
                    </tr>
                )
            })
    return (
        <div className="container mt-5">
            <div className="row">
                <div className= "col text-center">
                    <Table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product Name</th>
                                <th>Product Type</th>
                                <th>Quanity</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayItems}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <th>Subtotal</th>
                                <th>{price}</th>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <th>Taxes</th>
                                <th>{taxes}</th>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <th>Total</th>
                                <th>{total}</th>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><Link to='./checkout'><Button>Continue to Checkout</Button></Link></td>
                            </tr>
                        </tfoot>
                    </Table>
                </div>
            </div>
        </div>
    )
  }
}  



class ShoppingCart extends Component {

    render() {
        if (this.props.cart.length >= 1){
        return (
            <div className="container">
                <div className="row">
                    <div className="col text-center mt-3">
                        <h2>Your Shopping Cart</h2>
                        <RenderCartItems cart={this.props.cart} onClick={this.props.onClick} handleClick={this.props.handleClick} />
                    </div>
                </div>
            </div>
        )
        } else {
            return (
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h2>Your Shopping Cart</h2>
                        <p><em>Your cart is empty. How about you go shopping?</em></p>   
                        <img src='/assets/images/kra7.jpg' alt='leaf' className="m-3" />
                    </div>
                </div>
            </div>
            )
        }
    }
}


export default ShoppingCart;

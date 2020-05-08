import React, { Component } from 'react';
import DisplayNavbar from './DisplayNavbar'
import DisplayCards from './DisplayCards'
import DisplayPowders from './DisplayPowders'
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import NewUserGuide from './faqs';
import ShoppingCart from './ShoppingCart'
import Checkout from './checkout';
import Submission from './Submission';
import { PRODUCTS } from '../shared/products';
import { POWDERS } from '../shared/powders';
import Home from './HomeComponent'
import Footer from './DisplayFooter';
import { DISPLAY } from '../shared/productDisplay'
import { Switch, Route, Redirect } from 'react-router-dom'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: PRODUCTS,
            powders: POWDERS,
            display: DISPLAY,
            cart: []
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleClick(item) {
        //updates quanity of item if already in cart
        if (this.state.cart.includes(item)){

            let newCart = this.state.cart
            let index = newCart.indexOf(item)
            newCart.splice(index, 1)

            let newQuanity= item.quanity+=1;
            item.quanity= newQuanity
            newCart.push(item)  
            this.setState({
                cart: newCart
            })
            console.log(this.state.cart)
        }
        //adds item to cart if not there already 
        else {
        let newCart = this.state.cart
        newCart.push(item)
        this.setState({
            cart: newCart
        })
        }
    }
    //deletes item from cart 
    handleDelete(item) {
        let newCart = this.state.cart;
        let index = newCart.indexOf(item)
        newCart.splice(index, 1)
        this.setState({
            cart: newCart
        })
    }

    render() {
        return (
            <div>
                <DisplayNavbar cart={this.state.cart} />
                <Switch>
                    <Route path='/home'>
                        <Home display={this.state.display} />
                    </Route>
                    <Route exact path='/directory'>
                        <DisplayCards products={this.state.products} onClick={this.handleClick} />
                    </Route>
                    <Route exact path='/powders'>
                        <DisplayPowders powders={this.state.powders} onClick={this.handleClick} />
                    </Route>
                    <Route exact path='/about'>
                        <AboutUs />
                    </Route>
                    <Route exact path='/guide'>
                        <NewUserGuide />
                    </Route>
                    <Route exact path='/contactus'>
                        <ContactUs />
                    </Route>
                    <Route exact path='/shoppingcart'>
                        <ShoppingCart cart={this.state.cart} onClick={this.handleDelete} />
                    </Route>
                    <Route exact path='/checkout'>
                        <Checkout cart={this.state.cart} />
                    </Route>
                    <Route exact path='/submission'>
                        <Submission />
                    </Route>
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main;
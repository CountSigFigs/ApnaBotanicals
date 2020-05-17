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
import Home from './HomeComponent'
import Footer from './DisplayFooter';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import {connect} from 'react-redux';
import ACTIONS from '../Redux/actions'

const mapStateToProps= state => {
    return {
        display: state.display,
        powders: state.powders,
        products: state.capsules,
        cart: state.cart
    }
}

const mapDispatchToProps= dispatch => ({
    addItem: item => dispatch(ACTIONS.addItem(item)),
    deleteItem: item => dispatch(ACTIONS.deleteItem(item)),
    resetCart: () => dispatch(ACTIONS.resetCart())
})

class Main extends Component {
    constructor(props) {
        super(props)
        
        this.handleClick = this.handleClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleClick(item) {
        this.props.addItem(item)
    }

    handleDelete(item) {
        this.props.deleteItem(item)
    }

    handleReset(){
        this.props.resetCart()
    }
    
    render() {
        return (
            <div>
                <DisplayNavbar cart={this.props.cart} />
                <Switch>
                    <Route path='/home'>
                        <Home display={this.props.display} />
                    </Route>
                    <Route exact path='/directory'>
                        <DisplayCards products={this.props.products} onClick={this.handleClick} />
                    </Route>
                    <Route exact path='/powders'>
                        <DisplayPowders powders={this.props.powders} onClick={this.handleClick} />
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
                        <ShoppingCart 
                            cart={this.props.cart} 
                            onClick={this.handleDelete}
                            handleClick={this.handleClick}
                        />
                    </Route>
                    <Route exact path='/checkout'>
                        <Checkout cart={this.props.cart} onClick={this.handleReset} />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))
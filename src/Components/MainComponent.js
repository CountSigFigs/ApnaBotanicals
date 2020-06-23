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
import * as ACTIONS from '../Redux/actions'
import UserLanding from './UserLanding';

const mapStateToProps= state => {
    return {
        display: state.display,
        powders: state.powders,
        capsules: state.capsules,
        cart: state.cart,
        contacts: state.contacts,
        reviews: state.reviews
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCapsules: () => dispatch(ACTIONS.fetchCapsules()),
    fetchPowders: () => dispatch(ACTIONS.fetchPowders()),
    fetchContacts: () => dispatch(ACTIONS.fetchContacts()),
    postReview: (name, title, feedback) => dispatch(ACTIONS.postReview(name, title, feedback)),
    postContact: (name, phone, email, feedback) => dispatch(ACTIONS.postContact(name, phone, email, feedback)),
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

    componentDidMount(){
        this.props.fetchCapsules()
        this.props.fetchPowders()
        this.props.fetchContacts()
    }

    componentDidUpdate(){
       
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
                        <DisplayCards products={this.props.capsules} onClick={this.handleClick} />
                    </Route>
                    <Route exact path='/powders'>
                        <DisplayPowders powders={this.props.powders} onClick={this.handleClick} />
                    </Route>
                    <Route exact path='/about'>
                        <AboutUs reviews={this.props.reviews} postReview={this.props.postReview}/>
                    </Route>
                    <Route exact path='/guide'>
                        <NewUserGuide />
                    </Route>
                    <Route exact path='/contactus'>
                        <ContactUs postContact={this.props.postContact}/>
                    </Route>
                    <Route exact path='/users'>
                        <UserLanding />
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
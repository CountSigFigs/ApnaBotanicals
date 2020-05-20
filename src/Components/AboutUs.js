import React, {Component} from 'react';
import { Button } from 'reactstrap'
import {Link} from 'react-router-dom'

const business = require('../shared/Images/business.jpg');

class AboutUs extends Component {
    
    componentDidMount() {
        window.scrollTo(0, 0);
      }
      
    render (){
    return (
        <div className="container mb-3">
            <div className="row">
                <div className="col text-center mt-3">
                    <i class="fa fa-leaf fa-4x mt-1"></i>
                </div>
            </div>
            <div className='row my-2'>
                <div className="col-8 col-md-6 text-center m-2 mx-auto">
                    <img src={business} alt='owners' id="owner" />
                </div>
                <div className="col-9 col-md-5 mx-auto">
                <h2>About Us</h2>
                <p> Apna Botanicals is dedicated to bringing a consistent quality product to our consumers. 
                Quality and satisfaction is our <strong> #1</strong> priority. We are a family owned and operated 
                business in Springfield, Oregon and look forward to serving you. Want to hear from us? Click the 
                button below to send us a message</p>
                <Button className="btn btn-lg" id="contactButton"><Link to='/contactus'>Contact Us</Link></Button>
                </div>
            </div>
        </div>
    )
    }
}

export default AboutUs;

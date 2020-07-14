import React from 'react';
import { Link }  from 'react-router-dom';


function Footer(props) {
    return (
        <div className="container-fluid footer">
            <div className="row text-center d-flex justify-content-center pt-4 mb-1">
                <div className="col-md-2 mb-1">
                    <h6 className="text-uppercase font-weight-bold">
                        <Link to='/home'>Home</Link>
                    </h6>
                </div>
                <div className="col-md-2 mb-1">
                    <h6 className="text-uppercase font-weight-bold">
                        <Link to='/about'>About Us</Link>
                    </h6>
                </div>
                <div className="col-md-2 mb-1">
                    <h6 className="text-uppercase font-weight-bold">
                        <Link to="/guide">FAQS</Link>
                    </h6>
                </div>
                <div className="col-md-2 mb-1">
                    <h6 className="text-uppercase font-weight-bold">
                        <Link to="/contactus">Contact</Link>
                    </h6>
                </div> 
         </div>
        <hr className="rgba-white-light"/>
        <div className="row d-flex text-center justify-content-center mb-md-0 mb-1">
            <div className="col-12 col-md-3">
                <p className="mt-1">2175 Terra Street, Seattle WA 98161</p>
            </div>
            <div className="col-12 col-md-3 pt-1">
                <a href="tel:+1-541-337-5664"><i className="fa fa-phone"></i>
                1-541-337-5664</a>
            </div>
            <div className="col-12 col-md-3 pt-1">
                <a href="mailto:apnabotanicals@gmail.com"><i className="fa fa-envelope-o"></i>
                apnabotanicals@gmail.com</a>
            </div>
        </div>
         <hr className="clearfix d-md-none rgba-white-light" />
        <div className="row pb-3">
          <div className="col-md-12 text-center">
                <div className="mb-2 flex-center">
                    <a href='facebook.com'><i className="fa fa-facebook-f fa-lg white-text mr-4"> </i></a>
                    <a href='twitter.com'><i className="fa fa-twitter fa-lg white-text mr-4"> </i></a>
                     <a href='instagram.com'><i className="fa fa-instagram fa-lg white-text mr-4"> </i></a>
                     <a href='youtube.com'><i className="fa fa-youtube"></i></a>
                </div>
            </div>
         </div>
    </div>
    )
}


export default Footer;
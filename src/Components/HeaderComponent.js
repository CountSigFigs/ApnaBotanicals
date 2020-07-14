import React from 'react';

const apnaLogo= require('../shared/Images/Apna_logo.png');

function Header() {
    return (
    <header className="cover">
       <div className="container">
           <div className="row">
               <div className="col text-center mt-5">
                    <img src={apnaLogo} alt="Apna Logo" id="logo"/>
                    <h1 className="welcome mt-2"><i>A better way to Kratom</i></h1>
                    <i className="fa fa-leaf fa-4x mt-1"></i>
               </div>
           </div>
       </div>
    </header>
    )
}


export default Header;
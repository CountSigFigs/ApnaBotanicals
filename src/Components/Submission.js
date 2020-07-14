import React from 'react';

const apnaLogo= require('../shared/Images/Apna_logo.png');

function Submission () {
    return(
        <div className='container'>
            <div className="row">
                <div className="col text-center">
                    <h2>Congrats!</h2>
                    <p><em>We have receieved your order</em></p>
                    <p>Your item will be shipped soon. When it does, you'll receive a notification 
                    email with tracking info.</p>
                    <img src={apnaLogo} className="img-fluid" alt='kratom' />
                </div>
            </div>
        </div>
    )
}

export default Submission;

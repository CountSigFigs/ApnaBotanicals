import React from 'react';


function Submission () {
    return(
        <div className='container'>
            <div className="row">
                <div className="col text-center">
                    <h2>Congrats!</h2>
                    <p><em>We have receieved your order</em></p>
                    <p>Your item will be shipped soon. When it does, you'll receive a notification 
                    email with tracking info.</p>
                    <img src='/assets/images/Apna_logo.png' className="img-fluid" alt='kratom' />
                </div>
            </div>
        </div>
    )
}

export default Submission;

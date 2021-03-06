import React from 'react';
import './Offer.css';

const Offer = () => {
    return (
        <div className='container mt-5 mb-5'>
            <h1 className="text-warning text-center banner-title py-5">Surprising Offer!</h1>
            <div className="container pt-2"></div>
            <div className="row mx-2 ">
                <div className="col-sm offer-col1 mb-2">

                    <div><h2>Enjoy 30% CashBack</h2> <h6>Up to $70 on all Bkash</h6></div>

                </div>
                <div className="col-sm offer-col2 mb-2">

                    <div><h2>25 Extra Free On KFC</h2> <h6>Stay Home, We deliver</h6></div>

                </div>
                <div className="col-sm offer-col3 mb-2">
                    <div><h2>Japanese Food At Home</h2> <h6>Up to $30 on all Bkash</h6></div>

                </div>
            </div>
        </div>
    );
};

export default Offer;
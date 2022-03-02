import React from 'react';
import Contact from '../../Contact/Contact';
import Products from '../../Products/Products';
import Banner from '../Banner/Banner';
import Offer from '../Offer/Offer';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Products></Products>
            <Offer></Offer>
            <Contact></Contact>
        </div>
    );
};

export default Home;
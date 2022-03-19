import React from 'react';
import Contact from '../../Contact/Contact';
import Feature from '../../Feature/Feature';
import Products from '../../Products/Products';
import Banner from '../Banner/Banner';
import Offer from '../Offer/Offer';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>

            <Services></Services>
            <Products></Products>
            <Offer></Offer>
            <Contact></Contact>
            <Feature></Feature>
            <hr />
        </div>
    );
};

export default Home;
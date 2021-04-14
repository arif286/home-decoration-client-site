import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Header from '../Header/Header';
import Project from '../Project/Project';
import Service from '../Service/Service';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <>
            <Header />
            <Project />
            <AboutUs/>
            <Service />
            <Testimonials/>
        </>
    );
};

export default Home;
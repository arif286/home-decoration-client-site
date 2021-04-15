import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
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
            <Testimonials />
            <Contact/>
            <Footer/>
        </>
    );
};

export default Home;
import React from 'react';
import Header from '../Header/Header';
import Project from '../Project/Project';
import Service from '../Service/Service';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <>
            <Header />
            <Project />
            <Service />
            <Testimonials/>
        </>
    );
};

export default Home;
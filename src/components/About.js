import React from 'react';
import HeroSection from './HeroSection';
import Best from './Best';
import Features from './Features';
import Firm from './Firm';
import Footer from './Footer'
function About() {
    return (
        <div className="about">
            <HeroSection h1="About Us" p1="Home" p2="Pages" p3="About Us" />
            <Best />
            <Firm />
            <Features />
            <Footer />
        </div >
    );
}

export default About;

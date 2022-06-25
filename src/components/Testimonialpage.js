import React from 'react';
import HeroSection from './HeroSection';
import Swipers from './Swiper';
import Footer from './Footer'
function Testimonialpage() {
    return (
        <div>
            <HeroSection h1="Testimonial" p1="Home" p2="Pages" p3="Testimonial" />
            <Swipers />
            <Footer />
        </div >
    );
}

export default Testimonialpage;

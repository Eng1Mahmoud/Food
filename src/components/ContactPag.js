import React from 'react';
import HeroSection from './HeroSection';
import Contact from './Contact'
import Footer from './Footer'
function ContactPag() {
    return (
        <div>
            <HeroSection h1="Contact Us" p1="Home" p2="Pages" p3="Contact Us" />
            <Contact />
            <Footer />
        </div >
    );
}

export default ContactPag;

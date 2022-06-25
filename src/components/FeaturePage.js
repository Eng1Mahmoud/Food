import React from 'react';
import HeroSection from './HeroSection';
import Features from './Features';
import Footer from './Footer'
function FeaturePage() {
    return (
        <div>
            <HeroSection h1="Features" p1="Home" p2="Pages" p3="Features" />
            <Features />
            <Footer />
        </div>
    );
}

export default FeaturePage;

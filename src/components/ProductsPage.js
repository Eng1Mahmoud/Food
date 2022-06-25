import React from 'react';
import HeroSection from './HeroSection';
import Product from './Product';
import Firm from './Firm';
import Swipers from './Swiper';
import Footer from './Footer'
function ProductsPage() {
    return (
        <div>
            <HeroSection h1="Products" p1="Home" p2="Pages" p3="Products" />
            <Product />
            <Firm />
            <Swipers />
            <Footer />

        </div>
    );
}

export default ProductsPage;

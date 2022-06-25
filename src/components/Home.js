import React from 'react';
import Slider from './Slider';
import Best from './Best';
import Features from './Features';
import Product from './Product';
import Firm from './Firm';
import Swipers from './Swiper';
import Blog from './Blog'
import Footer from './Footer'

import BlogsData from '../components/objectsData'// import data for blogs 

let BlogData = BlogsData.slice(0, 3) // import data you need only
function Home() {
    return (
        <div className="home">
            <Slider />
            <Best />
            <Features />
            <Product />
            <Firm />
            <Swipers />
            <Blog Blogs={BlogData} />
            < Footer />
        </div>
    );
}

export default Home;

import React from 'react';
import HeroSection from './HeroSection';
import Blog from './Blog'
import Footer from './Footer'
import BlogsData from '../components/objectsData'// import data for blogs 

let BlogData = BlogsData.slice(0, 6) // import data you need only

function BlogPage() {
    return (
        <div className='blog'>
            <HeroSection h1="Blog Grid" p1="Home" p2="Pages" p3="Blog Grid" />
            <Blog Blogs={BlogData} />
            < Footer />

        </div >
    );
}

export default BlogPage;


// import image slider
import img1s from '../images/carousel-1.jpg'
import img2s from '../images/carousel-2.jpg'
// import image FeatureData
import img1f from '../images/icon-1.png'
import img2f from '../images/icon-2.png'
import img3f from '../images/icon-3.png'

// import images  menu
import img1m from '../images/product-1.jpg'
import img2m from '../images/product-2.jpg'
import img3m from '../images/product-3.jpg'
import img4m from '../images/product-4.jpg'
import img5m from '../images/product-5.jpg'
import img6m from '../images/product-6.jpg'
import img7m from '../images/product-7.jpg'
import img8m from '../images/product-8.jpg'
// import images blog
import img1 from '../images/blog-1.jpg'
import img2 from '../images/blog-2.jpg'
import img3 from '../images/blog-3.jpg'

let itemSlider = [
    {
        img: img1s,
        h1: "Organic Food Is Good For Health",

    },
    {
        img: img2s,
        h1: "Natural Food Is Always Healthy",

    }
]


let FeatureData = [

    {
        img: img1f,
        h1: "Natural Process",
        p: "Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.",


    },
    {
        img: img2f,
        h1: "Organic Products",
        p: "Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.",


    },
    {
        img: img3f,
        h1: "Biologically Safe",
        p: "Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.",


    },



];

let Menu = [
    // this array contian inpormation every memper
    {
        img: img1m,
        prevPrice: 25,
        price: 22,
        title: "Fresh Tomato",
        catigory: "fruits"
    },
    {
        img: img2m,
        prevPrice: 30,
        price: 20,
        title: "Fresh Tomato",
        catigory: "veg"

    },
    {
        img: img3m,
        prevPrice: 25,
        price: 19,
        title: "Fresh Tomato",
        catigory: "fruits"
    },
    {
        img: img4m,
        prevPrice: 20,
        price: 17,
        title: "Fresh Tomato",
        catigory: "veg"
    },
    {
        img: img5m,
        prevPrice: 25,
        price: 22,
        title: "Fresh Tomato",
        catigory: "veg"

    },
    {
        img: img6m,
        prevPrice: 15,
        price: 12,
        title: "Fresh Tomato",
        catigory: "fruits"

    },
    {
        img: img7m,
        prevPrice: 13,
        price: 10,
        title: "Fresh Tomato",
        catigory: "veg"

    },
    {
        img: img8m,
        prevPrice: 9,
        price: 6,
        title: "Fresh Tomato",
        catigory: "fruits"

    }
];

let BlogsData = [
    // this array contian inpormation every memper
    {
        img: img1,
        text: "Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.",

    }, {
        img: img2,
        text: "Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.",

    },
    {
        img: img3,
        text: "Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.",

    },
    {
        img: img1,
        text: "Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.",

    }, {
        img: img2,
        text: "Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.",

    },
    {
        img: img3,
        text: "Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.",

    },
];
export default BlogsData
export { FeatureData, Menu, itemSlider }
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import HeadSection from './HeadSection'
import { FaEye, FaShoppingBag } from "react-icons/fa"// import icon FaEye

import { Menu } from './objectsData';
function Product() {
    let filters = (cat) => {
        let newMenu = Menu.filter(e => {
            return e.catigory === cat
        })
        setProducts(newMenu)

    }
    let [products, setProducts] = useState(Menu)
    let navigat = useNavigate()

    return (
        <div className='Product py-5'>
            <div className="container py-5">

                <div className="row ">
                    {/* start list buttons*/}
                    <div className='col-md-6 col-sm-12 '>
                        <HeadSection head="Our Products"
                            p="Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo."
                        />
                    </div>
                    <div className='list col-md-6 col-sm-12  py-4  text-md-end text-sm-center '>
                        <button className=" button" onClick={() => setProducts(Menu)}>All</button>
                        <button className=" button" onClick={() => { filters("veg") }}>Fegetable</button>
                        <button className=" button" onClick={() => { filters("fruits") }}>Fruits</button>
                    </div>
                </div>
                {/* start product item*/}
                <div className="row g-4 py-5">
                    {// loop for item
                        products.map((product, index) => {

                            return (

                                <div className="col-lg-3 col-md-4 col-sm-2 col-sm-6" key={index}>
                                    <div className="item">
                                        <div className="img">
                                            <img className="img-fluid" src={product.img} alt={`item${index + 1}`} loading=" lazy"></img>
                                            <span>New</span>
                                        </div>
                                        <div className="content text-center py-3">
                                            <strong>{product.title}</strong>
                                            <p>
                                                <span className="price">${product.price}</span>

                                                <span className="prevPrice"> ${product.prevPrice} </span>
                                            </p>
                                        </div>

                                        <div className="add ">
                                            <a className=" text-center py-2 pe-2 detail " href='#kj'><FaEye className="px-2 fa" />View detail</a>
                                            <a className="text-center  py-2 " href='#kln'><FaShoppingBag className="px-2 fa" />Add to cart</a>
                                        </div>
                                    </div>

                                </div>
                            )

                        })
                    }
                </div>

                <div className='button'><button className="btns btnProduct" onClick={() => { navigat('/productspage') }}>Browse More Products</button></div>

            </div>

        </div >

    );
}

export default Product;

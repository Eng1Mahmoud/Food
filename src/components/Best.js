import React, { useRef } from 'react';
import ImgAbout from '../images/about.jpg'
import { FaRegCheckCircle } from "react-icons/fa";


function Best() {
    let left = useRef(null)


    return (
        <div className="about py-5">

            <div className="container pt-5">
                <div className="row">
                    <div className='d-flex align-items-center justify-content-center col-md-6 col-sm-12' ref={left}>
                        <div className="img  rounded">
                            <img className="img-fluid  " src={ImgAbout} alt="about" loading="lazy"></img>
                        </div>
                    </div>
                    <div className=' col-md-6 col-sm-12'>
                        <div className="content py-5">
                            <h2 className="pb-3">Best Organic Fruits And Vegetables</h2>
                            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <div className='group pt-3'>
                                <p><FaRegCheckCircle className=" pe-3 right" /> Tempor erat elitr rebum at clita</p>
                                <p><FaRegCheckCircle className="pe-3 right" /> Aliqu diam amet diam et eos</p>
                                <p><FaRegCheckCircle className="pe-3 right" /> Clita duo justo magna dolore erat amet</p>
                                <button className="btns"  >Service</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Best

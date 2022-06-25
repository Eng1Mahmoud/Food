import React from 'react';
import HeadSection from './HeadSection'
import { FeatureData } from './objectsData';
function Features() {
    return (
        <div className="Features  text-center py-0">
            <div className="container py-5">

                <HeadSection head="Our Features"
                    p="Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo."
                />
                <div className="row g-4">
                    {
                        FeatureData.map((item, index) => {

                            return (

                                <div className="col-lg-4 col-md-6 col-sm-12 " key={index}>
                                    <div className="px-3 py-5 item rounded-3">
                                        <img src={item.img} alt={`icon${index + 1}`} loading=" lazy" ></img>
                                        <h4 className=" py-3">{item.h1}</h4>
                                        <p>{item.p}</p>
                                        <button className="btns ">Service</button>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </div >
    );
}

export default React.memo(Features);

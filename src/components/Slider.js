import React from 'react';
import { Carousel } from 'react-bootstrap'
import { itemSlider } from './objectsData';
function Slider() {
    return (
        <div>
            <Carousel className="Carousel">
                {
                    itemSlider.map((it, index) => {
                        return (
                            <Carousel.Item key={index} >
                                <img
                                    className="d-block w-100 img"
                                    src={it.img}
                                    alt="First slide"
                                    loading=" lazy"

                                />
                                <Carousel.Caption className="title">
                                    <h1 >{it.h1}</h1>
                                    <div className="button d-flex">
                                        <button className=" btns me-3" >Products</button>
                                        <button className=" btns service"  >Service</button>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )

                    })
                }
            </Carousel>
        </div>
    );
}

export default Slider

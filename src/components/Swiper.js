import React from 'react'
import HeadSection from './HeadSection'
import { FaQuoteLeft } from "react-icons/fa"// import icon quot
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
// import required modules
import { FreeMode, Autoplay, Navigation } from "swiper"
// import images
import img2 from '../images/testimonial-2.jpg'
import img3 from '../images/testimonial-3.jpg'
import img4 from '../images/testimonial-4.jpg'



let persons = [
    // this array contian inpormation every memper
    {
        img: img2,
        p: "Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.",
        h4: "Cllint Name",
        span: "Profession"

    }, {
        img: img3,
        p: "Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.",
        h4: "Cllint Name",
        span: "Profession"

    },
    {
        img: img4,
        p: "Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.",
        h4: "Cllint Name",
        span: "Profession"

    },
    {
        img: img2,
        p: "Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.",
        h4: "Cllint Name",
        span: "Profession"

    },
    {
        img: img3,
        p: "Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.",
        h4: "Cllint Name",
        span: "Profession"

    },
]



function Swipers() {
    return (
        <div className="  Swipers text-center py-4 ">
            <div className="container py-5">
                <HeadSection head="Customer Review"
                    p="Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo."
                />
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    navigation={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: true,
                    }}
                    loop={true}

                    modules={[FreeMode, Autoplay, Navigation]}
                    breakpoints={{
                        // when window width is >= 320px
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 24,
                            resistanceRatio: 0.85,
                        },
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 24,
                            resistanceRatio: 0.85,
                        },
                        // when window width is >= 992px
                        992: {
                            slidesPerView: 3,
                            spaceBetween: 24,
                            resistanceRatio: 0.85,
                        },
                    }}
                    className="mySwiper py-5"
                >
                    {
                        persons.map((person, index) => {

                            return (

                                <SwiperSlide className="item p-4" key={index}>
                                    <FaQuoteLeft className="quot" />
                                    <p className='py-3 d-block'>{person.p}</p>
                                    <div className="d-flex align-items-center">
                                        <div className='img'>
                                            <img className='rounded-circle' src={person.img} alt={`person ${index + 1}`} loading=" lazy"></img>
                                        </div>
                                        <div className='name py-3 ps-2'>
                                            <h4>{person.h4}</h4>
                                            <span>{person.span}</span>
                                        </div>
                                    </div>
                                </SwiperSlide>

                            )

                        })
                    }
                </Swiper>
            </div>
        </div >
    );



}

export default Swipers;

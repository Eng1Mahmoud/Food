import React from 'react';
import HeadSection from './HeadSection'
// import  icon from 'react-icons/fa'
import { FaUserAlt, FaCalendarMinus } from 'react-icons/fa'
// import  card from  'react-bootstrap'
import { Card } from 'react-bootstrap'
import BlogsData from './objectsData';


function Blog({ Blogs }) {
    return (
        <div className="Blogs py-4" >
            <div className="container py-5">
                <HeadSection head="Latest Blog"
                    p="Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo."
                />
                <div className="row py-3 g-4">

                    {
                        Blogs.map((blog, index) => {

                            return (
                                <div className='col-lg-4 col-md-6 col-sm-12' key={index} >
                                    <Card className="card">
                                        <Card.Img className="img-fluid img" variant="top" src={blog.img} alt={` icon${index}`} loading=" lazy" />
                                        <Card.Body>
                                            <Card.Text className="text">

                                                <span className=" py-4 p mb-2">{blog.text}</span>

                                                <>
                                                    <span className="px-3 ">
                                                        <FaUserAlt className="icon pe-2" />
                                                        Admin
                                                    </span>
                                                    <span className="px-3" >
                                                        <FaCalendarMinus className="icon pe-2" />
                                                        01 Jan, 2045
                                                    </span>
                                                </>

                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )

                        })
                    }

                </div>
            </div >
        </div >
    );
}

export default Blog;

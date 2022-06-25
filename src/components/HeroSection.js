import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
function HeroSection(props) {
    let navigat = useNavigate()

    return (
        <div className="hearoSection">
            <div className="content px-5">
                <h1>{props.h1}</h1>
                <Breadcrumb>
                    <Breadcrumb.Item onClick={() => { navigat('/') }}>{props.p1}</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">
                        {props.p2}
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>{props.p3}</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        </div >
    );
}

export default HeroSection;

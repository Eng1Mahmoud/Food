import React, { useState, useRef } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa'
function ScrollTop() {
    let [hidden, setHidde] = useState("")
    let top = useRef(null)
    window.onscroll = () => {
        if (window.scrollY <= 250) {
            setHidde("hidde")
        }
        else {
            setHidde("")
        }
    }
    function scroll() {
        window.scrollTo(0, 100)
    }
    return (
        <div className={`ScrollTop ${hidden}`} ref={top} >
            <FaArrowCircleUp className="icone rounded-circle" onClick={() => { scroll() }} />
        </div >
    );
}

export default ScrollTop;

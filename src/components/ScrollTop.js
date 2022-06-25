import React, { useState, useRef } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa'
function ScrollTop() {
    let [hidden, setHidde] = useState("")
    let top = useRef(null)

    function scroll() {
        window.scrollTo(0, 0)
    }
    return (
        <div className={`ScrollTop ${hidden}`} ref={top} >
            <FaArrowCircleUp className="icone rounded-circle" onClick={() => { scroll() }} />
        </div >
    );
}

export default ScrollTop;

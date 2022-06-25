import React, { useState } from 'react';
import Main from './Main';
import Navbars from './Navbar';

function Header() {

    let [FixClass, setFixClass] = useState("")
    window.onscroll = () => {
        console.log("scroll")
        if (window.scrollY >= 100) {

            setFixClass("fixed")
        }
        else { setFixClass("head") }
    }

    return (
        <header className={FixClass} >
            <Main />
            <Navbars />
        </header>
    );
}

export default Header

import React, { useState } from 'react';
import Main from './Main';
import Navbar from './Navbar';


function Header() {
    let [FixClass, setFixClass] = useState("")
    window.onscroll = () => {

        if (window.scrollY >= 100) {

            setFixClass("fixed")
        }
        else { setFixClass("") }
    }
    return (
        <header className={FixClass} >
            <Main />
            <Navbar />
        </header>
    );
}

export default React.memo(Header);

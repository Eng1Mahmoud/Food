import React from 'react';
import ReactDOM from 'react-dom';

function Portal(props) {


    return ReactDOM.createPortal(
        <div className='louding'><div className='spiner'></div></div>
        ,
        document.getElementById("portal")
    );
}

export default Portal;

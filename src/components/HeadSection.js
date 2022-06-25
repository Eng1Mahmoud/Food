import React from 'react';
function HeadSection({ head, p }) {
    return (
        <div className="head w-50 mx-auto text-center ">
            <hr className="hr1 mx-auto" />
            <hr className="hr2 mx-auto" />
            <p className="h2 pt-3">{head}</p>
            <p className="pt-3 ">{p}</p>
        </div>
    );
}

export default HeadSection;

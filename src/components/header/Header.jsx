import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {

    //Dinamically changing header with the current URL
    const location = useLocation().pathname;
    var link = "About";
    var toLink = "/giacomoboffo/about";
    if (location === '/giacomoboffo/') {
        link = "About";
        toLink = '/giacomoboffo/about'
    } else {
        link = "Go back";
        toLink = '/giacomoboffo/'
    };

    console.log(location)
    return (
        <header className="container-fluid d-flex header">
            <div className="container-fluid justify-content-between d-flex flex-row header">
                <div className="d-flex flex-lg-row flex-column">
                    <div className="mr-5">
                        <Link className='link' to='/giacomoboffo/'>
                            <h1>Giacomo Boffo </h1>
                        </Link>
                    </div>
                    <div className="">
                        {/* <Link className='link' to='/'> */}
                            <h1>Graphic Design & Art Direction</h1>
                        {/* </Link> */}
                    </div>
                </div>
                <div className="">
                    <Link className="link" to={toLink}><h1>{link}</h1></Link>
                </div>
            </div >
        </header >
    );
};

export default Header;
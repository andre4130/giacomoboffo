import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {

//Dinamically changing header with the current URL
    const location = useLocation().pathname;
    var link = "About";
    var toLink = "/about";
    if (location === '/') {
        link = "About";
        toLink = '/about'
    } else {
        link = "Go back";
        toLink = '/'
    };

    return (
        <header className="container-fluid header">
            <div className="row ml-4 mr-4">
                <div className="col-5">
                    <Link className='link' to='/'>
                    <h1><strong>Giacomo Boffo &nbsp; &nbsp; &nbsp; &nbsp; Graphic Design & Art Direction</strong></h1>   
                    </Link>
                </div>
                <div className="col-4"></div>
                <div className="col-3 end">
                    <Link className="link" to={toLink}><h1><strong>{link}</strong></h1></Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
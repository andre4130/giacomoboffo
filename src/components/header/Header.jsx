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
        <header className="container-fluid d-flex header">
            {/* <div className="row ml-4 mr-4">
                <div className="name">
                    <div className="row">
                        <div className="col-lg-6 no-wrap">
                            <Link className='link' to='/'>
                                <h1>Giacomo Boffo </h1>
                            </Link>
                        </div>
                        <div className="col-lg-6">
                            <Link className='link' to='/'>
                                <h1>Graphic Design & Art Direction</h1>
                            </Link></div>

                    </div>
                </div>
                <div className="empty"></div>
                <div className="end">
                    <Link className="link" to={toLink}><h1>{link}</h1></Link>
                </div>
            </div> */}

            <div className="container-fluid justify-content-between d-flex flex-row header">
                <div className="d-flex flex-md-row flex-column ml-2">
                    <div className="mr-5">
                        <Link className='link' to='/'>
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
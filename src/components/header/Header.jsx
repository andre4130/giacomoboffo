import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
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
                    <Link className="link" to='/about'><h1><strong>About</strong></h1></Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
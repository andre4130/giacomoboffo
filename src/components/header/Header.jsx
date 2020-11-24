import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="container-fluid header mt-3">
            <div className="row ml-4 mr-4">
                <div className="col-6">
                    <Link className='link' to='/'>
                    <h1><strong>Giacomo Boffo &nbsp; &nbsp; &nbsp; &nbsp; Graphic Design & Art Direction</strong></h1>   
                    </Link>
                </div>
                <div className="col-6 end">
                    <Link className="link" to='/about'><h1>About</h1></Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
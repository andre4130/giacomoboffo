import React from 'react';

const Header = () => {
    return (
        <div className="container-fluid header">
            <div className="row">
                <div className="col-6">
                    <h1><strong> Header works</strong></h1>
                </div>
                <div className="col-6 end">
                    <h1><strong> other section</strong></h1>
                </div>
            </div>
        </div>
    );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';


const Logo = () => {
    return (
        <Fade left>
            <Link to="/" className="container mt-4">
                <div className='row'>
                    <div className='col-md-6 mb-3' style={{ "marginRight": "10px", "color": "black" }}>
                        <img className='logo' src="./logo192.png" alt="logo" style={{ "maxWidth": "20%" }} />
                    </div>
                </div>
            </Link>
        </Fade>
    );
}

export default Logo;

import React from 'react';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>zozchuu</h1>
            <div className="navlinks">
                <a href="/home">Home</a>
                <a href="/Blog">Blog</a>
                <a href="/portfolio">Portfolio</a>
                <a href="/prices">Pricelist</a>
                <a href="/TOS">Terms</a>
                <a href="/Contact">Contact</a>
            </div>
        </nav>
     );
}
 
export default Navbar;
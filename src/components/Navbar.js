import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>zozchuu</h1>
            <div className="navlinks">
                <Link className="link-styles" to="/">Home</Link>
                <Link className={"link-styles"} to="/Blog">Blog</Link>
                <Link className={"link-styles"} to="/">Portfolio</Link>
                <Link className={"link-styles"} to="/">Pricelist</Link>
                <Link className={"link-styles"} to="/">Terms</Link>
                <Link className={"link-styles"} to="/">Contact</Link>

            </div>
        </nav>
     );
}
 
export default Navbar;
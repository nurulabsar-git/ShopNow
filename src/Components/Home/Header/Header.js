import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
const Header = () => {

    const textDecoration = {
        textDecoration: 'none'
    }
    return (
        <div className="nav-style">
            <Link style={textDecoration} to="/">Home</Link>
            <Link style={textDecoration} to="/admin">Admin</Link>
            <Link style={textDecoration} to="/order">Orders</Link>
            <Link style={textDecoration} to="/">About Us</Link>
            <Link style={textDecoration} to="/">Service</Link>
        </div>
    );
};

export default Header;
import React from 'react';
import './Header.css';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header-container">
            <div className="header-menu">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </div>
            <div className="header-logo">
                <img src="images/logo.png" alt="Store logo" />
            </div>
            <div className="header-cart">
                <Link to="/cart"><FaShoppingCart size={30} /></Link>
            </div>
        </div>
    );
}

export default Header;

import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';
import React, { useState } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Hardcoding a sample username for now
    const username = "johnDoe";  // This would normally come from the logged-in user's session or auth state

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <Link to="/" className="logo">
                    <i className="fas fa-store"></i> ShopHub
                </Link>

                {/* Search Bar */}
                <div className="search-bar">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search products..."
                    />
                    <button className="search-button">
                        <i className="fas fa-search"></i>
                    </button>
                </div>

                {/* Navigation Links */}
                <div className={`navbar-menu ${isMenuOpen ? 'show' : ''}`}>
                    <Link to="/" className="nav-link">Home</Link>


                    {/* Link to the User Profile Page */}
                    <Link to={`/user/${username}`} className="nav-link">User</Link>

                    <div className="nav-icons">
                        {/* Cart Icon */}
                        <Link to="/cart" className="icon-button">
                            <i className="fas fa-shopping-cart"></i>
                            <span className="cart-count">3</span>
                        </Link>

                        {/* Profile Icon */}
                        <Link to="/profile" className="icon-button">
                            <i className="fas fa-user"></i>
                        </Link>
                    </div>
                </div>

                {/* Hamburger Menu for Mobile */}
                <div
                    className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

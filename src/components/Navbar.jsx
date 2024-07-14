// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/daily-login">Daily Login Reward</Link></li>
                <li><Link to="/fashion-challenges">Fashion Challenges</Link></li>
                <li><Link to="/my-wardrobe">My Wardrobe</Link></li>
                <li><Link to="/live-look">Live Look</Link></li>
                <li><Link to="/mix-and-match">Mix and Match</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;

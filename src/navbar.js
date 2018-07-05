import React, { Component } from 'react';
import './navbar.css';


class Navbar extends Component {
    render() {
        return (
        <header>
            <h2>WorldCup</h2>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
        
        );
    }
}


export default Navbar;
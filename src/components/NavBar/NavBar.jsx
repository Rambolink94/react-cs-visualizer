import React, { Component } from 'react';
import {NavLinks} from './NavLinks.js';
import "./NavBar.css";

class NavBar extends Component {
    state = {

    }
    render() {
        return (
            <nav className="nav-bar">
                <ul className="links-list">
                    {NavLinks.map((link, index) => (
                        <li className="link" key={index}><a href={link.url}>{link.label}</a></li>
                    ))}
                </ul>
            </nav>
        );
    }
}

export default NavBar;
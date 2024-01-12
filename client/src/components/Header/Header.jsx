import React from 'react';
import './header.css'

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark custom-navbar">
            <a className="navbar-brand" id='logo-name'>Peyton Touma</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="ml-auto">
                <a href="/resume" className="btn btn-outline-light">Resume</a>
            </div>
        </nav>
    );
}

export default Header;

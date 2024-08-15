import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link as LinkRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import './header.css';

function Header() {
    // state to track whether the navbar should be collapsed
    const [expanded, setExpanded] = useState(false);

    // handler for when a link is clicked
    const handleLinkClick = () => {
        setExpanded(false); // collapse the navbar
    };

    // renders the header component which is a bootstrap nav bar
    return (
        <Navbar
            bg="dark"
            variant="dark"
            expand="lg"
            className="custom-navbar fixed-top py-3"
            expanded={expanded} // pass the expanded state to the Navbar
        >
            <Navbar.Brand id="logo-name">Peyton Touma |</Navbar.Brand>
            <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                onClick={() => setExpanded(!expanded)} // toggle the expanded state on click
            />
            <Navbar.Collapse id="navbarNav">
                {/* links that in time will render different react components */}
                <Nav className="me-auto nav-bar">
                    <HashLink className="nav-bar-links" to="/#about-me" onClick={handleLinkClick}>
                        Home
                    </HashLink>
                    <HashLink className="nav-bar-links" to="/#description" onClick={handleLinkClick}>
                        About
                    </HashLink>
                    <HashLink className="nav-bar-links" to="/#portfolio" onClick={handleLinkClick}>
                        Portfolio
                    </HashLink>
                    <HashLink className="nav-bar-links" to="/#contact-me" onClick={handleLinkClick}>
                        Contact
                    </HashLink>
                    <HashLink className="nav-bar-links" to="/#contact-me" onClick={handleLinkClick}>
                        Design Work
                    </HashLink>
                    <HashLink className="nav-bar-links" to="/#contact-me" onClick={handleLinkClick}>
                        Certifications
                    </HashLink>
                </Nav>
                {/* Link to the /resume route */}
                <Button
                    as={LinkRouter}
                    to="/resume"
                    variant="outline-light"
                    className="resume-button ml-auto"
                    onClick={handleLinkClick} // manually call handleLinkClick when Resume link is clicked
                >
                    Resume
                </Button>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;

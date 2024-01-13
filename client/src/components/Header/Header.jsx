import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import './header.css';

function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
            <Navbar.Brand id='logo-name'>Peyton Touma</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse  id="navbarNav">
                <Nav className="me-auto nav-bar">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
                <Button href="/resume" variant="outline-light" className="resume-button ml-auto">Resume</Button>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;

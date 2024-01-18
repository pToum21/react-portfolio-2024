import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link as LinkRouter } from 'react-router-dom';

import './header.css';
import { HashLink } from 'react-router-hash-link';

function Header() {
  
    // renders the header component which is a bootstrap nav bar
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar fixed-top py-3">
            <Navbar.Brand id='logo-name'>Peyton Touma |</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id="navbarNav">
                {/* links that in time will render different react components */}
                <Nav className="me-auto nav-bar">
                    <HashLink className='nav-bar-links' to="/#about-me">Home</HashLink>
                    <HashLink className='nav-bar-links' to="/#description">About</HashLink>
                    <HashLink className='nav-bar-links' to="/#portfolio">Portfolio</HashLink>
                    <HashLink className='nav-bar-links' to="/#contact-me">Contact</HashLink>
                </Nav>
                {/* Link to the /resume route */}
                <Button as={LinkRouter} to="/resume" variant="outline-light" className="resume-button ml-auto">Resume</Button>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;

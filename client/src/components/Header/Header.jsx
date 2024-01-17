import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import './header.css';

function Header() {
    // renders the header component which is a bootstrap nav bar
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar fixed-top py-3">
            <Navbar.Brand id='logo-name'>Peyton Touma |</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id="navbarNav">
                {/* a links that in time will render diffrent react components */}
                <Nav className="me-auto nav-bar">
                    <Nav.Link href="#about-me">Home</Nav.Link>
                    <Nav.Link href="#description">About</Nav.Link>
                    <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="#contact-me">Contact</Nav.Link>
                </Nav>
                {/* resume button */}
                <Button href="/resume" variant="outline-light" className="resume-button ml-auto">Resume</Button>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;

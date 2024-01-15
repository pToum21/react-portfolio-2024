import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';
import './footer.css'

const Footer = () => {
    // return for the footer component
    return (
        <footer className="footer fixed-bottom py-3 bg-dark">
            <div className="footer-container">
                {/* clickable footer icons */}
                <a className="footer-links" href="https://www.linkedin.com/in/peyton-touma-b666a7281/">
                    <FontAwesomeIcon icon={faLinkedin} className="fa-1x mx-1 footer-icons" />
                </a>
                <a className="footer-links" href="https://github.com/pToum21">
                    <FontAwesomeIcon icon={faGithub} className="fa-1x mx-1 footer-icons" />
                </a>
                <a className="footer-links" href="https://discordapp.com/users/775148641014775808">
                    <FontAwesomeIcon icon={faDiscord} className="fa-1x mx-1 footer-icons" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;

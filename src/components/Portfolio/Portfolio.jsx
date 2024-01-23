import { Container, Row, Col } from 'react-bootstrap';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './porfilio.css';
import anyyes from '../../assets/anyesThumbnail.png';
import viewacar from '../../assets/viewAcarthumbnail.png';
import techblog from '../../assets/techBlogThumbnail.png';
import weatherapp from '../../assets/WhatsTheWeather.png';
import cryptograbber from '../../assets/CryptoGrabberThumbNail.png'

const Portfolio = () => {
    return (
        // renders the portfolio component
        <div id="portfolio">
            <h1 className='portfolio-title'>Portfolio</h1>
            <h2 className='port-header'>Each Project is a unique piece of Web Development <span className='emoji'>🧩</span></h2>
            {/* container holding all projects and descs */}
            <Container style={{ marginTop: '50px' }}>
                {/* project 1 */}
                <Row className='each-proj'>
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        {/* project image */}
                        <img
                            src={anyyes}
                            alt="anyYes project"
                            className="rounded-image"
                            style={{ width: '100%' }}
                        />
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center">
                        <div className="text-center">
                            {/* project title */}
                            <h3 className='proj-title'>AnyYes <span className='emoji'>🎮</span></h3>
                            <p className='proj-text'>
                                This application is a full stack e-commerce site that allows the user to buy and sell retro gaming consoles and games.
                            </p>
                            {/* project stack */}
                            <div style={{ fontSize: '0.8rem', color: 'white', maxWidth: '75%', margin: '0 auto' }}>
                                <h5 className='used-stack'>Stack Used:</h5>
                                HTML, CSS (Bulma), Handlebars (with Express Session and Express Handlebars), JavaScript, Node.js, Express.js, MySQL (using mySQL2), Sequelize, Multer (for image upload), Blob storage, Stripe (for payments), bcrypt (for password hashing), dotenv, Config folder, Seeds, Splidejs (for image carousel).
                            </div>
                            {/* a link icons */}
                            <div className="d-flex justify-content-center">
                                <div className="mr-3">
                                    <a href="https://anyyes-3bf9b8d1cf29.herokuapp.com/" style={{ fontSize: '1rem', color: 'white', marginBottom: 0 }}>Deployed Demo:
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="fa-1x mx-1" />
                                    </a>
                                </div>
                                <div className="mr-3">
                                    <a href="https://github.com/pToum21/anyYes" style={{ fontSize: '1rem', color: 'white', marginBottom: '0', padding: '5px' }}>GitHub Repo:
                                        <FontAwesomeIcon icon={faGithub} className="fa-1x mx-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                {/* project 2 */}
                <Row className='each-proj'>
                    <Col xs={12} md={6} className="d-flex align-items-center">
                        <div className="text-center">
                            <h3 className='proj-title'>Crytpo Grabber <span className='emoji'>💰</span></h3>
                            <p className='proj-text'>
                                This front-end crypto viewing website provides a homepage overview of the entire cryptocurrency market. Users can select a specific coin to view its performance graph with a specified time frame.
                            </p>
                            <div style={{ fontSize: '0.8rem', color: 'white', maxWidth: '75%', margin: '0 auto' }}>
                                <h5 className='used-stack'>Stack Used:</h5>
                                HTML, CSS, Material Ui, React, JavaScript, npm, coin gecko api, bcrypt, react-router-dom, react-chartjs, react-alice-carousel, axios
                            </div>
                            <div className="d-flex justify-content-center">
                                <div className="mr-3">
                                    <a href="https://crypto-grabber.netlify.app/" style={{ fontSize: '1rem', color: 'white', marginBottom: 0 }}>Deployed Demo:
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="fa-1x mx-1" />
                                    </a>
                                </div>
                                <div className="mr-2">
                                    <a href="https://github.com/pToum21/crypto-grabber-repo" style={{ fontSize: '1rem', color: 'white', marginBottom: 0, padding: '5px' }}>GitHub Repo:
                                        <FontAwesomeIcon icon={faGithub} className="fa-1x mx-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        <img
                            src={cryptograbber}
                            alt="anyYes project"
                            className="rounded-image"
                            style={{ width: '100%' }}
                        />
                    </Col>
                </Row>
                {/* project 3 */}
                <Row className='each-proj'>
                <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        <img
                            src={techblog}
                            alt="anyYes project"
                            className="rounded-image"
                            style={{ width: '100%' }}
                        />
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center">
                        <div className="text-center">
                            <h3 className='proj-title'>TechBlog <span className='emoji'>🖥️</span></h3>
                            <p className='proj-text'>
                                This is a full-stack technology blog that empowers users to seamlessly execute all CRUD operations. Additionally, users can engage in insightful discussions through comments on posts and have the capability to modify their personalized dashboards for an enhanced and tailored experience.
                            </p>
                            <div style={{ fontSize: '0.8rem', color: 'white', maxWidth: '75%', margin: '0 auto' }}>
                                <h5 className='used-stack'>Stack Used:</h5>
                                HTML, CSS (BootStrap), Handlebars (with Express Session and Express Handlebars), JavaScript, Node.js, Express.js, MySQL (using mySQL2), Sequelize, bcrypt (for password hashing), dotenv.
                            </div>
                            <div className="d-flex justify-content-center">
                                <div className="mr-3">
                                    <a href="https://tech-blogger-the-full-exp-603c6ae302d3.herokuapp.com/" style={{ fontSize: '1rem', color: 'white', marginBottom: 0 }}>Deployed Demo:
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="fa-1x mx-1" />
                                    </a>
                                </div>
                                <div className="mr-2">
                                    <a href="https://github.com/pToum21/full-stack-tech-blog" style={{ fontSize: '1rem', color: 'white', marginBottom: 0, padding: '5px' }}>GitHub Repo:
                                        <FontAwesomeIcon icon={faGithub} className="fa-1x mx-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                {/* project 4 */}
                <Row className='each-proj'>
                    <Col xs={12} md={6} className="d-flex align-items-center">
                        <div className="text-center">
                            <h3 className='proj-title'>Whats The Weather <span className='emoji'>☔</span></h3>
                            <p className='proj-text'>
                                Retrieve weather data for any city, providing access to current weather conditions, a five-day forecast, and the present date. Seamlessly toggle between metric and imperial units, accompanied by a persistent search history feature.
                            </p>
                            <div style={{ fontSize: '0.8rem', color: 'white', maxWidth: '75%', margin: '0 auto' }}>
                                <h5 className='used-stack'>Stack Used:</h5>
                                HTML, CSS, JavaScript, bootstrap, weatherApi
                            </div>
                            <div className="d-flex justify-content-center">
                                <div className="mr-3">
                                    <a href="https://ptoum21.github.io/weatherapp-2/" style={{ fontSize: '1rem', color: 'white', marginBottom: 0 }}>Deployed Demo:
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="fa-1x mx-1" />
                                    </a>
                                </div>
                                <div className="mr-3">
                                    <a href="https://github.com/pToum21/weatherapp-2" style={{ fontSize: '1rem', color: 'white', marginBottom: 0, padding: '5px' }}>GitHub Repo:
                                        <FontAwesomeIcon icon={faGithub} className="fa-1x mx-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        <img
                            src={weatherapp}
                            alt="anyYes project"
                            className="rounded-image"
                            style={{ width: '100%' }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Portfolio;

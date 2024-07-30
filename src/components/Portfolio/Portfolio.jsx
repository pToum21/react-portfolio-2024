import { Container, Row, Col } from 'react-bootstrap';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './porfilio.css';
import anyyes from '../../assets/anyesThumbnail.png';
import techblog from '../../assets/techBlogThumbnail.png';
import liberThumbNail from '../../assets/liberThumbnail.png'
import cryptograbber from '../../assets/CryptoGrabberThumbNail.png'
import blicky from '../../assets/blicky-thumbnail.png'
import GDATMs from '../../assets/gdatms.png'


const Portfolio = () => {
    return (
        // renders the portfolio component
        <div id="portfolio">
            <h1 className='portfolio-title'>Portfolio</h1>
            <h2 className='port-header'>Each Project is a unique piece of Web Development <span className='emoji'>🧩</span></h2>
            {/* container holding all projects and descs */}
            <Container style={{ marginTop: '50px' }}>
                <Row className='each-proj'>
                <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        <img
                            src={liberThumbNail}
                            alt="liber reader project"
                            className="rounded-image"
                            style={{ width: '100%' }}
                        />
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center">
                        <div className="text-center">
                            <h3 className='proj-title'>Liber <span className='emoji'>📚</span></h3>
                            <p className='proj-text'>
                                Liber is an interactive e-reader along with book-saving capabilities and a social media aspect -- think your Kindle, GoodReads, and saved-books-app combined.
                            </p>
                            <div style={{ fontSize: '0.8rem', color: 'white', maxWidth: '75%', margin: '0 auto' }}>
                                <h5 className='used-stack'>Stack Used:</h5>
                                React, Material Ui, mongoDb, gprahql, three.js/three-fiber, bcrypt, react-router-dom, axios
                            </div>
                            <div className="d-flex justify-content-center">
                                <div className="mr-3">
                                    <a href="https://liber-3-25f01cbf7764.herokuapp.com/" style={{ fontSize: '1rem', color: 'white', marginBottom: 0 }}>Deployed Demo:
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="fa-1x mx-1" />
                                    </a>
                                </div>
                                <div className="mr-2">
                                    <a href="https://github.com/pToum21/liber?tab=readme-ov-file" style={{ fontSize: '1rem', color: 'white', marginBottom: 0, padding: '5px' }}>GitHub Repo:
                                        <FontAwesomeIcon icon={faGithub} className="fa-1x mx-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    
                </Row>
                {/* project 1 */}
                <Row className='each-proj'>

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
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        {/* project image */}
                        <img
                            src={anyyes}
                            alt="anyYes project"
                            className="rounded-image"
                            style={{ width: '100%' }}
                        />
                    </Col>
                </Row>
                <Row className='each-proj'>
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        {/* project image */}
                        <img
                            src={GDATMs}
                            alt="GD ATMs project"
                            className="rounded-image"
                            style={{ width: '100%' }}
                        />
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center">
                        <div className="text-center">
                            {/* project title */}
                            <h3 className='proj-title'>GD ATMs <span className='emoji'>🎮</span></h3>
                            <p className='proj-text'>
                                This application is a full stack ticketing system that allows the user to buy, view and make support claims regarding my ATM locations.
                            </p>
                            {/* project stack */}
                            <div style={{ fontSize: '0.8rem', color: 'white', maxWidth: '75%', margin: '0 auto' }}>
                                <h5 className='used-stack'>Stack Used:</h5>
                                HTML, CSS, React, Material Ui, graphQL, node.js, express.js, bcrypt, react-router-dom, axios, google-maps API
                            </div>
                            {/* a link icons */}
                            <div className="d-flex justify-content-center">
                                <div className="mr-3">
                                    <a href="https://gd-atms-09c01d3953db.herokuapp.com/" style={{ fontSize: '1rem', color: 'white', marginBottom: 0 }}>Deployed Demo:
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="fa-1x mx-1" />
                                    </a>
                                </div>
                                <div className="mr-3">
                                    <a href="hhttps://github.com/pToum21/gd-atms-v2" style={{ fontSize: '1rem', color: 'white', marginBottom: '0', padding: '5px' }}>GitHub Repo:
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
                            alt="crypto grabber project"
                            className="rounded-image"
                            style={{ width: '100%' }}
                        />
                    </Col>
                </Row>


                <Row className='each-proj'>
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        <img
                            src={blicky}
                            alt="blicky project"
                            className="rounded-image"
                            style={{ width: '100%' }}
                        />
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center">
                        <div className="text-center">
                            <h3 className='proj-title'>Blicky.io <span className='emoji'>🔫</span></h3>
                            <p className='proj-text'>
                                Blicky.io is an online 3D multiplayer third person shooter game created using react and three.js.  The game gives players the ability to invite there friends and battle to the death.
                            </p>
                            <div style={{ fontSize: '0.8rem', color: 'white', maxWidth: '75%', margin: '0 auto' }}>
                                <h5 className='used-stack'>Stack Used:</h5>
                                React, JavaScript, Three.js, React-Three-Fiber, TailWind, playroomkit, rapier(physics engine)
                            </div>
                            <div className="d-flex justify-content-center">
                                <div className="mr-3">
                                    <a href="https://blicky.netlify.app/" style={{ fontSize: '1rem', color: 'white', marginBottom: 0 }}>Deployed Demo:
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="fa-1x mx-1" />
                                    </a>
                                </div>
                                <div className="mr-2">
                                    <a href="https://github.com/pToum21/multiplayer-shooter" style={{ fontSize: '1rem', color: 'white', marginBottom: 0, padding: '5px' }}>GitHub Repo:
                                        <FontAwesomeIcon icon={faGithub} className="fa-1x mx-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>




                {/* project 3 */}
                <Row className='each-proj'>
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
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        <img
                            src={techblog}
                            alt="tech project"
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

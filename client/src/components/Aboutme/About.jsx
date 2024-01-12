import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons'
import avatar from '../../assets/cartoon_LOAF-ezgif.com-webp-to-jpg-converter.jpg'

function About() {
    return (
        <div className="container text-center mt-5">
            <h1>Peyton Touma</h1>
            <p>Full-Stack Web Developer and Software Engineer</p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cumque, incidunt possimus placeat sit dolorum praesentium aperiam laudantium unde reprehenderit distinctio dicta nobis dolorem voluptate velit perspiciatis quibusdam iste veritatis!
            </p>

            <div className="mt-3">
                <FontAwesomeIcon icon={faLinkedin} className="fa-2x mx-1" />
                <FontAwesomeIcon icon={faGithub} className="fa-2x mx-1" />
                <FontAwesomeIcon icon={faDiscord} className="fa-2x mx-1" />
            </div>

            <img src={avatar} alt="avatar image" className="rounded-circle img-fluid mt-3" style={{ width: '200px', height: '200px' }} />
        </div>
    );
}

export default About;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons'

function About() {
    return (
        <div className="container d-flex align-items-center justify-content-center mt-5">
            <div className="text-center">
                <h1>Peyton Touma</h1>
                <p>Full-Stack Web Developer and Software Engineer</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cumque, incidunt possimus placeat sit dolorum praesentium aperiam laudantium unde reprehenderit distinctio dicta nobis dolorem voluptate velit perspiciatis quibusdam iste veritatis!
                </p>

                <img src="" alt="avatar image" />

                <div className="mt-3"> {/* Add margin top for spacing */}
                    <FontAwesomeIcon icon={faLinkedin} className="fa-2x mx-1" /> {/* Use fa-3x for larger size and mx-2 for horizontal margin */}
                    <FontAwesomeIcon icon={faGithub} className="fa-2x mx-1" />
                    <FontAwesomeIcon icon={faDiscord} className="fa-2x mx-1" />
                </div>
            </div>
        </div>
    );
}

export default About;
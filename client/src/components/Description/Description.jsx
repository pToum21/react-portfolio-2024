import { Container, Row, Col } from 'react-bootstrap';

function Description() {
    return (
        <Container>
            <Row>
                <Col className='md-8'>
                    <img src='' alt="Description Image" className="img-fluid" />
                </Col>
                <Col className='md-8'>
                    <p>I'm Peyton Touma, a Full-Stack Web Developer based in Los Angeles, with roots in the small town of Olney, Maryland. Currently enrolled in the UCLA Full-Stack Web Development Bootcamp, I'll be completing the course in February 2024. My skill set includes JavaScript for dynamic web pages, HTML, CSS, and React for crafting engaging user interfaces. I work with Node.js and Express.js for building scalable server-side applications, and manage databases using MySQL, MongoDB, Sequelize, and Mongoose. Additionally, I'm proficient in front-end frameworks like Tailwind, Bootstrap, and Bulma, and use Webpack for optimized asset bundling. GitHub is my go-to for version control, ensuring efficient collaboration and code management.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Description;
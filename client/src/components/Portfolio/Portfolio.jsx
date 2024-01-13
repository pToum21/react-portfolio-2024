import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Portfolio() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title>AnyYes</Card.Title>
                <Card.Text>
                    This application is a full stack e-commerce site that allows the user to buy and sell retro gaming consoles and games.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>
                    <h5>Stack Used:</h5>
                    HTML, CSS (Bulma), Handlebars (with Express Session and Express Handlebars), JavaScript, Node.js, Express.js, MySQL (using mySQL2), Sequelize, Multer (for image upload), Blob storage, Stripe (for payments), bcrypt (for password hashing), dotenv, Config folder, Seeds, Splidejs (for image carousel).
                </ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link href="https://anyyes-3bf9b8d1cf29.herokuapp.com/">Deployed Demo</Card.Link>
                <Card.Link href="https://github.com/pToum21/anyYes">GitHub Link</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default Portfolio;
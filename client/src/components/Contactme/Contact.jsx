// Contact.jsx
import './contact.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function Contact() {
    return (
        <div className="full-page">
            <div className="contact-box">
                <Form>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Name/Company Name"
                            aria-label="Name"
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Email"
                            aria-label="Sender's Email"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                    </InputGroup>

                    <InputGroup>
                        <InputGroup.Text>Message</InputGroup.Text>
                        <Form.Control as="textarea" aria-label="With textarea" />
                    </InputGroup>

                    <Button as="input" type="submit" value="Submit" />
                </Form>
            </div>
        </div>
    );
}

export default Contact;

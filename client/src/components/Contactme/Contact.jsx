// Contact.jsx
import './contact.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function Contact() {
    return (
        <>

            <div className="full-page">

                <div className="title-box">
                    <h1 className='contact-me-header'>Contact Me</h1>
                    <h2 className='form-title'>Don't be shy hit my line <span className='emoji'>👇</span></h2>
                </div>
                <div className="contact-box bg-dark">
                    <Form>
                        <InputGroup className="mb-3">
                            <Form.Control
                                className='bg-dark'
                                placeholder="Name/Company Name"
                                aria-label="Name"
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <Form.Control
                                className='bg-dark'
                                placeholder="Email"
                                aria-label="Sender's Email"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Text id="basic-addon2" className='bg-dark text-white'>@example.com</InputGroup.Text>
                        </InputGroup>

                        <InputGroup>

                            <InputGroup.Text className='bg-dark text-light'>Message</InputGroup.Text>
                            <Form.Control
                                className='bg-dark'
                                as="textarea"
                                aria-label="With textarea" />
                        </InputGroup>

                        <Button as="input" type="submit" value="Submit" />
                    </Form>
                </div>
            </div>
        </>
    );
}

export default Contact;

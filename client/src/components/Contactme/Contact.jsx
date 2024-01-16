// Contact.jsx
import './contact.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
    const [state, handleSubmit] = useForm("xpzvworp");
    if (state.succeeded) {
        return <p>Thanks for Contacting me, you will hear back shortly!</p>;
    }

    return (
        <>
            {/* div holdes the contact me section */}
            <div className="full-page">
                {/* contains the contact me title and header */}
                <div className="title-box">
                    <h1 className='contact-me-header'>Contact Me</h1>
                    <h2 className='form-title'>Don't be shy hit my line <span className='emoji'>👇</span></h2>
                </div>

                {/* this section actual holds the bootstrap component */}
                <div className="contact-box bg-dark">
                    <Form onSubmit={handleSubmit}>

                        <InputGroup className="mb-3">
                            <Form.Control
                                name="username"
                                id="username"
                                className='bg-dark'
                                placeholder="Name/Company Name"
                                aria-label="Name"
                            />
                        </InputGroup>

                        <InputGroup className="mb-3" htmlFor="email">
                            <Form.Control
                                id="email"
                                type="email"
                                name="email"
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
                                id="message"
                                name="message"
                                className='bg-dark'
                                as="textarea"
                                aria-label="With textarea" />
                        </InputGroup>

                        {/* submit button */}
                        <div>
                            <Button as="input" type="submit" disabled={state.submitting} value="Submit" className="custom-submit-btn" />
                        </div>

                    </Form>
                </div>
            </div>
        </>
    );
}

export default Contact;

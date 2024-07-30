import './contact.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useForm } from '@formspree/react';

function Contact() {
    const [state, handleSubmit] = useForm("xpzvworp");
    if (state.succeeded) {
        return (
            <div className="full-page">
                <div className="title-box">
                    <p className='thank-you-tag'>Thanks for contacting me! You will hear back shortly. <span className='emoji'>🙏</span></p>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="full-page" id="contact-me">
                <div className="title-box">
                    <h2 className='form-title'>Don't be shy, hit my line <span className='emoji'>👇</span></h2>
                </div>

                <div className="contact-box bg-dark">
                    <Form className="full-form-comp" onSubmit={handleSubmit}>
                        <InputGroup className="mb-3">
                            <Form.Control
                                name="username"
                                id="username"
                                className='bg-dark'
                                placeholder="Name/Company Name"
                                aria-label="Name"
                                required
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
                                required
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
                                required
                                aria-label="With textarea" />
                        </InputGroup>

                        <div>
                            <Button as="input" type="submit" disabled={state.submitting} value="Send" className="custom-submit-btn" />
                        </div>
                    </Form>

                    {/* Contact info area */}
                    <div className="contact-info">
                        <h3 className='contact-me-information'>Contact Information:</h3>
                        <h4 className='con-info-titles'>Address</h4>
                        <p>Los Angeles, CA</p>
                        <h5 className='con-info-titles'>Email</h5>
                        <p>pey2moo1@gmail.com</p>
                        <h6 className='con-info-titles'>Phone</h6>
                        <p>(240) 449-5594</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;

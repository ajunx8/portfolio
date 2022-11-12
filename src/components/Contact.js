import { Container, Row, Col } from "react-bootstrap"
import { useState } from "react";

export const Contact = () => {
  const formInitalDetails = {
    fullName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitalDetails)
  const [buttonText, setButtonText] = useState('Send')
  const [status, setStatus] = useState({})

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    let response = await fetch(`${process.env.REACT_APP_API_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formDetails)
    });
    setButtonText('Send');
    let result = await response.json();
    console.log(result);
    setFormDetails(formInitalDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: "Message sent successfully" })
    } else {
      setStatus({ success: false, message: 'Something went wrong, please try again later' })
    }
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <h2>Get in Touch!</h2>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <form onSubmit={handleSubmit}>
              <Row className="align-items-center flex-column">
                <Col>
                  <input type="text" value={formDetails.fullName} placeholder='Full Name' onChange={(e) => onFormUpdate('fullName', e.target.value)} />
                </Col>
                <Col>
                  <input type="email" value={formDetails.email} placeholder='Email Address' onChange={(e) => onFormUpdate('email', e.target.value)} />
                </Col>
                <Col>
                  <input type="telephone" value={formDetails.phone} placeholder='Phone Number' onChange={(e) => onFormUpdate('phone', e.target.value)} />
                </Col>
                <Col md="auto">
                  <textarea rows="6" value={formDetails.message} placeholder='Message' onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                  {
                    status.message &&
                    <Col>
                      <p className='light contact-msg'>{status.message}</p>
                    </Col>
                  }
                </Col>
                <Col>
                  <button type='submit'><span>{buttonText}</span></button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
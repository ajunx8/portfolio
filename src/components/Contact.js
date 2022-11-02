import { Container, Row, Col } from "react-bootstrap"
import { useState } from "react";

export const Contact = () => {
  const formInitalDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }

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
    e.preventDefault()
    setButtonText('Sending...')
    let response = await fetch(`${process.env.REACT_APP_API_URL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify(formDetails)
    });

    // .then(res => res.json())
    // .then(results => {

    setButtonText('Send');
    let result = await response.json();
    setFormDetails(formInitalDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: "Message sent successfully" })
    } else {
      setStatus({ success: false, message: 'Something went wrong, please try again later' })
    }

    // })
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className='align-items-center'>
          <Col>
            <h2>Get in Touch!</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className='px-1'>
                  <input type="text" value={formDetails.firstName} placeholder='First Name' onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                </Col>
                <Col sm={6} className='px-1'>
                  <input type="text" value={formDetails.lastName} placeholder='Last Name' onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                </Col>
                <Col sm={6} className='px-1'>
                  <input type="email" value={formDetails.email} placeholder='Email Address' onChange={(e) => onFormUpdate('email', e.target.value)} />
                </Col>
                <Col sm={6} className='px-1'>
                  <input type="telephone" value={formDetails.phone} placeholder='Phone Number' onChange={(e) => onFormUpdate('phone', e.target.value)} />
                </Col>
                <Col className='px-1'>
                  <textarea rows="6" value={formDetails.message} placeholder='Message' onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                  {
                    status.message &&
                    <Col>
                      <p className='light contact-msg'>{status.message}</p>
                    </Col>
                  }
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
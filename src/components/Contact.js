import { Container, Row, Col, Button } from "react-bootstrap"

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Container>
        <Row className='align-items-center'>
          <Col>
            <h2>Get in Touch!</h2>
            <p>I'm currently open to job opportunities!</p>
            <Button href="mailto:adrian.greksa@gmail.com?body=What would you like to say?">
                Email Me!
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
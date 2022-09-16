import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import headshot from '../assets/img/headshot.png'

export const About  = () => {
  return (
    <section className='about' id='about'>
      <Container>
        <Row>
          <Col className='about-img' sm={4}>
            <img src={headshot} alt="Adrian" className='headshot'/>
          </Col>
          <Col className='about-me-txt'>
            <h1>Hey! My name is <span>Adrian</span></h1>
            <h2>Software Engineer based in Sydney</h2>
            <br />
            <p>I'm a recent graduate from General Assembly's Software Engineering Immersive course, looking to join a team of out-of-the-box thinkers.</p>
            <Button className='about-btn' target='_blank' href='https://drive.google.com/file/d/1vU9WtBzxzhvs4NJR2IMUDhGRIVeNcbmy/view?usp=sharing'>View Resume</Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
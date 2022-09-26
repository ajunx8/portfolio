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
            <p>Before the course, I worked as a Machinist in plastics manufacturing where I learned to take pride and responsibility in the work that I put out. Working in an environment with unpredictable deadlines taught me to work cohesively within a team.</p>
            <p>During that time, I discovered Andrew Ng's online course on Machine learning where I developed analytical thinking and gained a growing interest in programming and algorithms.</p>
            <p>As of September 2022, I'm open to job opportunities so please feel free to <a className="email" href="mailto:adrian.greksa@gmail.com?body=What would you like to say?">email</a> or connect with me via <a href="https://www.linkedin.com/in/adriangreksa">LinkedIn</a></p>
            <Button className='about-btn' target='_blank' href='https://drive.google.com/file/d/17FWOg0atmpiW9arEzR79whURJTcAGmx-/view?usp=sharing'>View Resumé</Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
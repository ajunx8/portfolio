import React from 'react'
import { Col, Container, Row} from 'react-bootstrap'
import { ProjectCard } from './ProjectCard'
import ProjectData from './ProjectData'
import 'animate.css'

export const Projects = () => {
  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>I've worked on a variety of projects both individually and in collaboration with developers and UX designers.</p>
            <Row>
              {
                ProjectData.map((project, index) => {
                  return (
                    <ProjectCard
                      key={index}
                      {...project}
                    />
                  )
                })
              }
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
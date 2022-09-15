import { Col, Container, Row } from "react-bootstrap";

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1>Adrian Greksa</h1>
                        <p>Software Engineer</p>
                        <p>Learning how to harness software to delve deeper into our understanding of the Universe.</p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img alt='random pic' className="random-pic"></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

// learning how to harness software to delve deeper into our understanding of the Universe
// Traversing the tumultuous trails of our past pioneers in the field of computer programming
// Rewiring my brain to think algorithmically to unlock novel technologies
// Chipping away at the iceberg of programming.
// Branching out into the field of data analysis, machine learning and AI
// Following a passion to program solutions for all fields of research


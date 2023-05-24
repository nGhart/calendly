import React from 'react'
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap'
import h1 from '../images/b1.jpg'
import h2 from '../images/b3.jpeg'
import h3 from '../images/b4.jpg'
import h4 from '../images/b5.png'
import h5 from '../images/b6.webp'
import h6 from '../images/b7.png'

const Home = () => {
    return (
        <div>
            <Container fluid>
                <Row className='sectionOne'>
                    <Col xs={{ span: 4, offset: 1 }}>
                        <h1>Best source for all things <span style={{ color: 'midnightblue' }}>Real Estate</span></h1>
                        <h4>Enter your email and an agent will get in touch within 24 hours.</h4>

                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Enter Email"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-secondary" id="button-addon2">
                                Contact Us
                            </Button>
                        </InputGroup>

                    </Col>
                    <Col xs={{ span: 4, offset: 1 }}>
                        <img src={h1} alt="House"></img>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row className="sectionTwo">
                    <h4>EH Limited lorem ipsum dolor sit amet, consectetur adipisicing elit</h4>
                    <Col className="flex-container">
                        <img src={h2} alt='Logo' height="50px" width="100px" />
                        <img src={h3} alt='Logo' height="50px" width="100px" />
                        <img src={h4} alt='Logo' height="50px" width="100px" />
                        <img src={h5} alt='Logo' height="50px" width="100px" />
                        <img src={h6} alt='Logo' height="50px" width="100px" />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className="sectionThree">
                    <Col>
                        <Row>
                            <Col>
                                <h3>Building Construction</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </Col>
                            <Col>
                                <h3>Real Estate Sales</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </Col>
                            <Col>
                                <h3>Property Management</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default Home
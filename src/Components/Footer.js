import React from 'react'
import { Row, Container, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col xs={{ span: 10, offset: 1 }}>
                        <Row>
                            <Col xs={4}>
                                <h1>Get started </h1>
                                <p>How do you prefer to be contacted</p>
                                <div className="input-group">
                                    <input type="text" className="form-control" aria-label="..." placeholder="Mode of Contact" />
                                    <div className="input-group-btn">
                                        <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="caret"></span>
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-right">
                                            <li>Email</li>
                                            <li>WhatsApp</li>
                                            <li>Phone</li>
                                            <li>Video call</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>

                            <Col>
                                <h4>Contact Us</h4>
                                <p>Address: No., Street Name, City</p>
                                <p>Email: username@domain.ext</p>
                                <p>Tel: +233x xxxx xxxx</p>
                            </Col>
                            <Col>
                                <h4>Client</h4>
                                <p>Book an Appointment</p>
                                <p>FAQs</p>
                                <p>Talk to an Agent</p>
                                <p>Special Offers</p>
                            </Col>
                            <Col>
                                <h4>About Us</h4>
                                <p>EH Limited</p>
                                <p>Branches</p>
                                <p>Past Projects</p>
                            </Col>
                        </Row>



                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
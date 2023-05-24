import React from 'react'
import { Container, Row, Col, Figure } from 'react-bootstrap'
import a1 from '../images/b1.jpg'
import a2 from '../images/h3.jpg'
import a3 from '../images/h2.jpg'
import Footer from '../Components/Footer'

const Construction = () => {
  return (
    <div>
      <Container>
        <Row className='section'>
          <Col xs={{ span: 4, offset: 1 }}>
            <h1>Explore our packages</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="tellMe">
              <button type="submit">Learn more</button>
            </div>
          </Col>
          <Col xs={{ span: 4, offset: 1 }}>
            <Figure>
              <Figure.Image
                width={"100%"}
                height={180}
                alt="House"
                src={a1}
              />
            </Figure>
          </Col>
        </Row>
        <Row className='section'>
          <Col xs={{ span: 4, offset: 1 }}>
            <Figure>
              <Figure.Image
                width={"100%"}
                height={180}
                alt="House"
                src={a2}
              />
            </Figure>
          </Col>
          <Col xs={{ span: 4, offset: 1 }}>
            <div>
              <h1>Move in in six months</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </Col>
        </Row>
        <Row className='section'>
          <Col xs={{ span: 4, offset: 1 }}>
            <div>
              <h1>Stress-free process</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </Col>
          <Col xs={{ span: 4, offset: 1 }}>
            <Figure>
              <Figure.Image
                width={"100%"}
                height={180}
                alt="House"
                src={a3}
              />
            </Figure>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <div className="jumbotron section4" >
            <Col xs={4} className="jumbotron"><h3>Find the right package and let us handle the rest</h3>
              <button>Learn more</button></Col>
            <Col></Col>
          </div>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default Construction
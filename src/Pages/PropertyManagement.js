import React from 'react'
import Footer from '../Components/Footer'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap'
import h2 from '../images/b3.jpeg'
import h3 from '../images/b4.jpg'
import h4 from '../images/b5.png'
import h5 from '../images/b6.webp'
import h6 from '../images/b7.png'
import c1 from '../images/m1.jpg'
import c2 from '../images/m2.jpg'
import c3 from '../images/m3.jpg'

const PropertyManagement = () => {
  return (
    <div>
      <Container fluid>
        <Row className='sectionE'>

          <Col xs={{ span: 4, offset: 4 }}>
            <h2 className="text-center">We manage all properties</h2>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="tellMe manage">
              <button className="btn btn-default btn-lg" type="submit">Contact us</button>
            </div>
          </Col>

        </Row>
      </Container>


      <Container>
        <Row className="section4 jumbotron sectionF">

          <h4>Trusted by leading brands in the real estate industry</h4>
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

        <Row className="sectionc">


          <Col xs={4}>
            <Card>
              <Card.Title></Card.Title>
              <Card.Body>
                <Card.Img variant="top" src={c1} />
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4}>
            <Card>
              <Card.Title></Card.Title>
              <Card.Body>
                <Card.Img variant="top" src={c2} />
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4}>
            <Card>
              <Card.Title></Card.Title>
              <Card.Body>
                <Card.Img variant="top" src={c3} />
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>





          <div className=" tellMe manage" style={{ marginTop: "20px" }}>
            <button type="submit">Learn more</button>
          </div>
        </Row>
      </Container>

      <Footer />
    </div>
  )
}

export default PropertyManagement
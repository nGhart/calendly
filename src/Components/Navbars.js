import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Navbars = () => {
    return (
        <div><Navbar expand="lg" className='navBar' >
            <Container>
                <Link to="/" ><Navbar.Brand to="/" className='white'>Home</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" >
                        <Link to="construction" className='white'>Construction</Link>
                        <Link to="realty" className='white'>Real Estate</Link>
                        <Link to="propmanagement" className='white'>Property Management</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar></div>
    )
}

export default Navbars
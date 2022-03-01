import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
                <Container>
                    <Navbar.Brand className="fs-3 fw-bold" href="#home">Food<span className='text-warning'>Sense</span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse >
                        <Nav className="ms-auto text-light">
                            <Nav.Link to="/home#home">Home</Nav.Link>
                            <Nav.Link to="/home#packages-page">Packages</Nav.Link>




                            <Nav.Link to="/about">About Us</Nav.Link>
                            <Nav.Link to="/addPackage">Services</Nav.Link>
                            <Nav.Link to="/managePackages">Products</Nav.Link>
                            <Nav.Link to="/contact">Contact</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
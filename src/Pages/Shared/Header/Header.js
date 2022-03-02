import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../contexts/useAuth';
import './Header.css'
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
                <Container>
                    <Navbar.Brand className="fs-3 fw-bold" href="#home">Food<span className='text-warning'>Sense</span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse >
                        <Nav className="ms-auto text-light">
                            <Nav.Link to="/home#home">Home</Nav.Link>

                            <Nav.Link to="/about">About Us</Nav.Link>
                            <Nav.Link to="/addPackage">Services</Nav.Link>
                            <Nav.Link to="/products">Products</Nav.Link>
                            <Nav.Link to="/contact">Contact</Nav.Link>
                            {user?.email ?
                                <Button onClick={logOut} variant="light" className="mx-3 bg-warning text-white">Logout</Button>
                                :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                            <Navbar.Text>
                                User: <a style={{ textDecoration: "none" }} href="#login"> {user?.displayName}</a>
                            </Navbar.Text>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
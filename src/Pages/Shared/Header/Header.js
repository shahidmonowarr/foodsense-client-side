import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../contexts/useAuth';
import './Header.css'
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
                <Container>
                    <Navbar.Brand className="fs-2 fw-bold" href="#home">Food<span className='text-warning'>Sense</span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse >
                        <Nav className="ms-auto fw-bold text-light fs-5">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/products">Products</Nav.Link>
                            {/* <Nav.Link as={Link} to="/addProduct">Add Product</Nav.Link> */}

                            <Nav.Link as={HashLink} to="/home#contact">Contact</Nav.Link>
                            {user?.email &&
                                <Nav.Link as={Link} to="/addProduct">Add Product</Nav.Link>
                            }
                            {user?.email &&
                                <Nav.Link as={Link} to="/manageOrders">Manage Order</Nav.Link>
                            }
                            {/* {user?.email &&
                                <Nav.Link as={Link} to="/manageProducts">Manage Product</Nav.Link>
                            } */}
                            {user?.email ?
                                <Button onClick={logOut} variant="light" className="mx-3 bg-warning text-white">Logout</Button>
                                :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                            {user?.email ?
                                <Navbar.Text>
                                User: <a style={{ textDecoration: "none" }} href="#login"> {user?.displayName}</a>
                            </Navbar.Text>
                                :
                                <Nav.Link as={Link} to="/login"></Nav.Link>}
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
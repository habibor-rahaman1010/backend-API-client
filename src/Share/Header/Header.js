import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar sticky="top" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={NavLink} to={'/'}>Schools</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to={'/'}>Home</Nav.Link>
                    <Nav.Link as={NavLink} to={'/students'}>Students</Nav.Link>
                    <Nav.Link as={NavLink} to={'/teacher'}>Teacher</Nav.Link>
                    <Nav.Link as={NavLink} to={'/students/add'}>Add Student</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
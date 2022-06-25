import React from 'react';
import { NavLink } from 'react-router-dom'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { FaShoppingBag, FaUserAlt, FaSearch } from "react-icons/fa";

function Navbars() {
    return (
        <div className="Navbar ">
            <Navbar className="Navbar px-sm-2 px-md-5" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#"><h1>F<span>oo</span>dy</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-0 my-lg-0"
                            navbarScroll
                        >
                            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/about" >About Us</Nav.Link>
                            <Nav.Link as={NavLink} to="/productspage" >Products</Nav.Link>

                            <NavDropdown title="Pages" id="navbarScrollingDropdown">
                                <NavDropdown.Item as={NavLink} to="/blogpage">Blog Grid</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/featurepage">Features</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/testimonialpage"> Testimonial</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={NavLink} to="/contactpage">  Contact Us</Nav.Link>

                        </Nav>

                        <Nav.Link href="#action2" className="serche">
                            <FaSearch className="icon rounded-circle" />
                            <FaUserAlt className="icon rounded-circle" />
                            <FaShoppingBag className="icon rounded-circle" /></Nav.Link>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
}

export default Navbars;

import React, { useState } from "react";
import { Navbar, Container, Nav, Offcanvas, Button } from "react-bootstrap";
import { Link } from "react-scroll";
import resumePdf from "../assets/Resume_Ayush.pdf";
import "./CSS/Nav.css";

function NavigationBar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
                <Container>
                    <Navbar.Brand as={Link} to="home" smooth={true} duration={300}>
                        Ayush Verma
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                        show={show}
                        onHide={handleClose}
                        className="bg-dark text-white"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel" className="text-white">Menu</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link
                                    as={Link}
                                    to="home"
                                    smooth={true}
                                    duration={300}
                                    onClick={handleClose}
                                    className="link-item"
                                >
                                    Home
                                </Nav.Link>
                                <Nav.Link
                                    as={Link}
                                    to="about"
                                    smooth={true}
                                    duration={300}
                                    onClick={handleClose}
                                    className="link-item"
                                >
                                    About
                                </Nav.Link>
                                <Nav.Link
                                    as={Link}
                                    to="experience"
                                    smooth={true}
                                    duration={300}
                                    onClick={handleClose}
                                    className="link-item"
                                >
                                    Experience
                                </Nav.Link>
                                <Nav.Link
                                    as={Link}
                                    to="projects"
                                    smooth={true}
                                    duration={300}
                                    onClick={handleClose}
                                    className="link-item"
                                >
                                    Projects
                                </Nav.Link>
                                <Nav.Link
                                    as={Link}
                                    to="contact"
                                    smooth={true}
                                    duration={300}
                                    onClick={handleClose}
                                    className="link-item"
                                >
                                    Contact
                                </Nav.Link>
                            </Nav>
                            <div className="resume-button-container">
                                <Button variant="outline-light" href={resumePdf} download>
                                    Download Resume
                                </Button>
                            </div>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default NavigationBar;

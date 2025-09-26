import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, Offcanvas, Button, Form } from "react-bootstrap";
import { Link } from "react-scroll";
import resumePdf from "../assets/Resume_Ayush.pdf";
import "./CSS/Nav.css";

function NavigationBar({ theme = 'theme-dark', onToggleTheme }) {
    const [show, setShow] = useState(false);
    const [active, setActive] = useState('home');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const handler = () => {
            const sections = ['home', 'about', 'experience', 'projects', 'contact'];
            let current = 'home';
            sections.forEach((name) => {
                const el = document.querySelector(`div[name="${name}"]`);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        current = name;
                    }
                }
            });
            setActive(current);
        };
        window.addEventListener('scroll', handler, { passive: true });
        handler();
        return () => window.removeEventListener('scroll', handler);
    }, []);

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
                                    className={`link-item ${active === 'home' ? 'active' : ''}`}
                                >
                                    Home
                                </Nav.Link>
                                <Nav.Link
                                    as={Link}
                                    to="about"
                                    smooth={true}
                                    duration={300}
                                    onClick={handleClose}
                                    className={`link-item ${active === 'about' ? 'active' : ''}`}
                                >
                                    About
                                </Nav.Link>
                                <Nav.Link
                                    as={Link}
                                    to="experience"
                                    smooth={true}
                                    duration={300}
                                    onClick={handleClose}
                                    className={`link-item ${active === 'experience' ? 'active' : ''}`}
                                >
                                    Experience
                                </Nav.Link>
                                <Nav.Link
                                    as={Link}
                                    to="projects"
                                    smooth={true}
                                    duration={300}
                                    onClick={handleClose}
                                    className={`link-item ${active === 'projects' ? 'active' : ''}`}
                                >
                                    Projects
                                </Nav.Link>
                                <Nav.Link
                                    as={Link}
                                    to="contact"
                                    smooth={true}
                                    duration={300}
                                    onClick={handleClose}
                                    className={`link-item ${active === 'contact' ? 'active' : ''}`}
                                >
                                    Contact
                                </Nav.Link>
                            </Nav>
                            <div className="resume-button-container">
                                <Button variant="outline-light" href={resumePdf} download>
                                    Download Resume
                                </Button>
                            </div>
                            <div className="theme-toggle-container">
                                <Form.Check 
                                  type="switch"
                                  id="theme-switch"
                                  label={theme === 'theme-dark' ? 'Dark' : 'Light'}
                                  checked={theme === 'theme-dark'}
                                  onChange={onToggleTheme}
                                  className="text-white"
                                />
                            </div>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default NavigationBar;

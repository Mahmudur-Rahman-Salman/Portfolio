import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Menubar.css'


const Menubar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "black" }} variant="dark" >
                <Container>
                    <Navbar.Brand href="#home" className='fw-bold fs-3'>SAL<span className='text-warning'>MAN</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='bg-dark' />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to="/home" className="link m-3 text-light fs-5">Home</Link>
                            <Link to="/about" className="link m-3 text-light fs-5">About</Link>
                            <Link to="/projects" className="link m-3 text-light  fs-5">Projects</Link>
                            <Link to="/skills" className="link m-3 text-light  fs-5">Skills</Link>
                            <Link to="/contact" className="link m-3 text-light  fs-5">Contact</Link>
                            <Link to="#" className="link m-3 text-light fs-5"><Button variant="outline-secondary" className='text-light' data-aos="zoom-in" data-aos-duration="1000">Resume</Button></Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menubar;
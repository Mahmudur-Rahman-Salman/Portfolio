import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Menubar.css'


const Menubar = () => {
    const resumeButtonClick = () => {
        window.open('https://drive.google.com/file/d/1BNJC0BYko3nsFFRPskSYfLF_j0HGxw8D/view?usp=sharing');
    }
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
                            <button type="button" className="btn btn-outline-danger text-light  m-2 p-2 " data-aos="zoom-in" data-aos-duration="1500" onClick={resumeButtonClick}>Resume</button>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menubar;
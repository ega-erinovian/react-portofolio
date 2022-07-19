import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from 'react-router-dom'

const ChangePage = () => {
  return (
    <>
      <Navbar bg="transparent" expand="lg" variant="dark" fixed="top">
        <Container>
          <Link to="/" className="navbar-brand">E</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => {
            const navbar = document.querySelector('.navbar');

            navbar.classList.toggle('collapsed')
          }} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to='/About' className='nav-link'>About</Link>
              <Link to='/Experience' className='nav-link'>Experience</Link>
              <Link to='/Work' className='nav-link'>Work</Link>
            </Nav>
            <Nav>
              <Link to="/Contact" className='btn btn-outline-primary'>Contact Me</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default ChangePage;

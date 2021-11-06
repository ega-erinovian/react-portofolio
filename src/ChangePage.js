import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const ChangePage = () => {
  return (
    <>
      <Navbar bg="transparent" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">E</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/experience">Experience</Nav.Link>
              <Nav.Link href="/work">Work</Nav.Link>
            </Nav>
            <Nav>
              <Button href="/contact" variant="outline-primary">
                Contact Me
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default ChangePage;

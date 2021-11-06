import React from "react";
import { Form, Button } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const Contact = () => {
  return (
    <>
      <section id="contact" className="contact-page py-5">
        <div className="container text-light">
          <Fade right cascade>
            <h1 className="text-center">Contact Me</h1>
          </Fade>
          <Form>
            <Fade right cascade>
              <div className="row mb-3">
                <div className="col-lg-6">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="John" className="bg-dark text-light border-dark" />
                </div>
                <div className="col-lg-6">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control type="text" placeholder="Doe" className="bg-dark text-light border-dark" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" className="bg-dark text-light border-dark" />
                  </Form.Group>
                </div>
              </div>
            </Fade>
            <Fade right delay={150}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows={10} className="bg-dark text-light border-dark" placeholder="Im interested of hiring you" />
              </Form.Group>
            </Fade>
            <Fade right delay={350}>
              <div className="d-flex justify-content-end">
                <Button variant="primary" type="submit" size="lg px-4">
                  Submit
                </Button>
              </div>
            </Fade>
          </Form>
        </div>
      </section>
    </>
  );
};

export default Contact;

import React from "react";
import { Globe2, Envelope, Telephone } from "react-bootstrap-icons";
import Fade from "react-reveal/Fade";

const Contact = () => {
  return (
    <>
      <section id="contact" className="contact-page py-5">
        <div className="container">
          <Fade right cascade>
            <h1 className="text-center mb-3">Contact Me</h1>
          </Fade>
          <div class="row mt-1 ">
            <div class="col-lg-4">
              <Fade bottom cascade>
                <div className="row align-items-center mb-4 gap-4">
                  <div className="col-1 align-items-center">
                    <button className="contact-icon">
                      <Globe2 className="fs-5" />
                    </button>
                  </div>
                  <div className="col ms-2">
                    <h4>Location</h4>
                    <p className="fs-6 m-0">Sidoarum, Godean, Sleman, D.I. Yogyakarta</p>
                  </div>
                </div>
                <div className="row align-items-center mb-4 gap-4">
                  <div className="col-1 align-items-center">
                    <button className="contact-icon">
                      <Envelope className="fs-5" />
                    </button>
                  </div>
                  <div className="col ms-2">
                    <h4>Email</h4>
                    <p className="fs-6 m-0">erinovian69@gmail.com</p>
                  </div>
                </div>
                <div className="row align-items-center mb-4 gap-4">
                  <div className="col-1 align-items-center">
                    <button className="contact-icon">
                      <Telephone className="fs-5" />
                    </button>
                  </div>
                  <div className="col ms-2">
                    <h4>Call</h4>
                    <p className="fs-6 m-0">+62 851 5511 4016</p>
                  </div>
                </div>
              </Fade>
            </div>
            <div class="col mt-5 mt-lg-0">
                <Fade bottom cascade>
                  <form class="php-email-form" name="submit-to-google-sheet">
                      <div class="row">
                        <div class="col-md-6 form-group">
                          <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required/>
                        </div>
                        <div class="col-md-6 form-group mt-3 mt-md-0">
                          <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required/>
                        </div>
                      </div>
                      <div class="form-group mt-3">
                        <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required/>
                      </div>
                      <div class="form-group mt-3">
                        <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                      </div>
                      <div class="text-end mt-3">
                        <button type="submit" className="btn btn-primary btn-submit">Submit</button>
                        <button class="btn btn-primary btn-loading d-none" type="button" disabled>
                          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Loading...
                        </button>
                      </div>
                  </form>
                </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "../apifolder/contactApi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";


export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = async (e) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    console.log("contact  is tryin to connect 1");
    const { data } = await axios.post(
      "api/contact/",
      { name: name, email: email, message: message },
      config
    );
    console.log(data);
    console.log("contact is tryin to connect 2");
  };
  return (
    <div>
      <Navbar />
      <Container>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4 text-[30px] font-semibold">
              CONTACTEZ-NOUS - TBE3LIA.MA
            </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">
              <strong>Address:</strong> {contactConfig.YOU_ADRESSE}
            </h3>
            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                <p>
                  <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                </p>
              ) : (
                ""
              )}
            </address>
            <p>{contactConfig.description}</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Nom"
                    type="text"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                required
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button
                    className="btn ac_btn"
                    type="submit"
                    onClick={handleClick}
                  >
                    Send
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

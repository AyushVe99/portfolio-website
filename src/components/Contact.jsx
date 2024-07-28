import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Container } from "react-bootstrap";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5b7vxdp",
        "template_4p2s1fr",
        e.target,
        "ivKdLZ3t786sMqr-0"
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          setSent(true);
          setError(false);
        },
        (error) => {
          console.error("Error:", error.text);
          setError(true);
        }
      );

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="contact-section py-5">
      <Container className="contact-container">
        <h2 className="text-center mb-4">Contact Me</h2>
        {sent && (
          <div className="alert alert-success">Your message has been sent!</div>
        )}
        {error && (
          <div className="alert alert-danger">
            There was an error sending your message. Please try again.
          </div>
        )}
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </Container>
    </section>
  );
}

export default Contact;

"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    setStatus("Message delivery is being set up. Please check back shortly.");
  }
  return <form className="contact-form" onSubmit={handleSubmit}>
    <label htmlFor="contact-name">Name</label><input id="contact-name" name="name" type="text" placeholder="Your name" autoComplete="name" required />
    <label htmlFor="contact-email">Email</label><input id="contact-email" name="email" type="email" placeholder="Your email address" autoComplete="email" required />
    <label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" placeholder="Tell us a little about what you have in mind..." rows="5" required />
    <button className="button button-primary" type="submit">Send Message <span aria-hidden="true">↗</span></button>
    {status && <p className="form-status" role="status">{status}</p>}
  </form>;
}

import React from 'react';
import '../CSS/ContactUsPage.css';

const ContactUsPage = () => {
  return (
    <div className="contact-us-page">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUsPage;

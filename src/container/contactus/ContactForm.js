import React from "react";

const ContactForm = () => {
  return (
    <main className="form">
      <div className="form_name">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" className="form-input" />
      </div>
      <div className="form_email">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" className="form-input" />
      </div>
      <div className="form_message">
        <label htmlFor="message">Message</label>
        <input type="text" id="message" name="message" className="form-input" />
      </div>

      <div className="submit">
        <div className="form_checkbox">
          <input
            type="checkbox"
            id="checkbox"
            name="checkbox"
            className="form-checkbox"
          />
          <label htmlFor="checkbox">I Like it!</label>
        </div>
        <button className="form_btn">Send</button>
      </div>
    </main>
  );
};

export default ContactForm;

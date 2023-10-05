import React from "react";

import ContactForm from "./ContactForm";

import { IoIosArrowUp } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineMailOutline, MdLocationOn } from "react-icons/md";

const ContactUs = () => {
  return (
    <main className="contact" id="contact">
      <section className="contact_ourinfo">
        <h1 className="contact_h1">Contact Us</h1>
        <h2>Address</h2>
        <p>Swing by for a cup of coffee, or whatever.</p>

        <p className="contact_p">
          <MdLocationOn
            style={{
              color: "#51d7b3",
              marginLeft: "-2px",
              width: "18px",
              height: "18px",
            }}
          />{" "}
          Amman, Jordan
        </p>
        <p className="contact_p">
          <BsFillTelephoneFill
            style={{ color: "#51d7b3", width: "15px", height: "15px" }}
          />{" "}
          +96279 0000000
        </p>
        <p className="contact_p">
          <MdOutlineMailOutline
            style={{ color: "#51d7b3", width: "15px", height: "15px" }}
          />{" "}
          test@test.com
        </p>
      </section>

      <ContactForm />
      <div className="arrowUp" onClick={() => window.scrollTo(0, 0)}>
        <spam className="arrowUp-icon">
          <IoIosArrowUp
            style={{
              color: "black",
              width: "15px",
              height: "15px",
            }}
          />
        </spam>
      </div>
    </main>
  );
};

export default ContactUs;

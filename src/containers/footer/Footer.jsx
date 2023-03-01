import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="gpt3_footer section_padding">
      <div className="gpt3_footer-heading gradient_text">
        <h1>
          Do you want to step in to the <br />
          future before others
        </h1>
      </div>
      <div className="gpt3_footer-button">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3_footer-links">
        <div className="gpt3_footer-links_logo">
          <img src={logo} alt="gptLogo" />
          <p>
            Crechterwoord K12 182 DK <br />
            Alknjkcb, All Rights Reserved
          </p>
        </div>

        <div className="gpt3_footer-links_div">
          <h4>Links</h4>
          <p>Overdone</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className="gpt3_footer-links_div">
          <h4>Company</h4>
          <p>Terms & Condition</p>
          <p>Privacy & Policy</p>
          <p>Contact</p>
        </div>

        <div className="gpt3_footer-links_div">
          <h4>Get in Touch</h4>
          <p>Crechteroord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="gpt3_footer-copyright">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

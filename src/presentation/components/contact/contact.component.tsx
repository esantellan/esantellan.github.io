import React from "react";

import "./styles.css";

function Contact() {
  return (
    <section className="contactSection" id="contactSection">
      <span className="contactTitle">Contact Me</span>

      <div className="contactContainer">
        <span>Email me at:</span>
        <a className="contactLink" href="mailto:emilianosantellan@gmail.com">
            emilianosantellan@gmail.com
        </a>
        <p>Let's work together!</p>
      </div>
    </section>
  );
}

export default Contact;

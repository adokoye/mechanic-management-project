import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import Navbar from "../../components/Navbar";
import "../../components/Body";
const Contact = () => {
    return (
      <div className = "bodyContainer">
      <Navbar />
      <div className = "bodyText">
          <h1 className="section-head">Contact Us!</h1>
          <div className = "paraContainer">
              <p className="paraText">
              Contact Us

 
<br />
(123)123-1234
<br />
Mechanic-Management@email.com
<br />
123 Nowhere St
<br />
Anywhere, TX, 77777
<br /><br />
Shop Hours
<br />
Monday – Friday
<br />
8am – 8pm
<br /><br />

Call us at <a href="tel:111-222-3333">(111)-222-3333</a>
<br />
<a href = "mailto: Mechanic-Management@email.com">Email us!</a>
              </p>
          </div>
          
          
      </div>
  </div>
    );
};
  
  export default Contact;
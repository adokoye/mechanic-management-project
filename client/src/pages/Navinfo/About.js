import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import Navbar from "../../components/Navbar";
import "../../components/Body";

const About = () => {
    return (
      <div className = "bodyContainer">
      <Navbar />
      <div className = "bodyText">
          <h1 className="section-head">About Us and Our Mission.</h1>
          <div className = "paraContainer">
              <p className="paraText">
At Mechanic Management our goals are to
<br /><br />
Keep your car running reliably for as long as you decide to keep it
<br />
Help you avoid breakdowns and accidents<br />
Pass on reasonable prices to customers<br />
Have a Friendly and Knowledgeable experience for all customers<br />
Have your car fixed and returned ASAP
<br /><br />

These goals pushed our focus to make taking your car to the shop as simple, efficient, and transparent as possible! We achieve this through our easy to use portal. Nobody likes having to keep track of invoice numbers, account numbers, and an ever-growing list of passwords. We made our sign in process as simple as inputting your phone number. From inputting your phone number, you can check the status of your repairs, view your current invoices, and contact us with any questions.
              </p>
          </div>
          
          
      </div>
  </div>
    );
};

export default About;
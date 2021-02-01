import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import Navbar from "../../components/Navbar";

const Services = () => {
    return (
      <div className = "bodyContainer">
      <Navbar />
      <div className = "bodyText">
          <h1 className="section-head">Our Services.</h1>
          <div className = "paraContainer">
              <p className="paraText">
              
Our mechanics are ready to help you fix your car! From check-in to checkout we have designed our process to be simple, easy to use, and transparent for our customers.
<br /><br />
We have designed our process with Covid-19 pandemic in mind. To protect us customers and employees alike we designed mechanic management to require as little time in the shop for our customers as possible. You can check the status of your vehicle, view your invoice, and contact our staff all on Mechanic Managements website on your home computer or mobile device.
<br />
We offer bumper to bumper services to help you including
<br /><br />
Repairs & Diagnostics
<br />
Preventative maintenance
<br />
Electrical Vehicle Maintenance
<br />
Safety inspections
              </p>
          </div>
          
          
      </div>
  </div>
    );
};

export default Services;
import React from 'react'
import "./Body.css"
import Navbar from "../Navbar";
import CustomerForm from "../CustomerForm";
import Footer from "../Footer"

const Body = () => {
    return (

        <div className = "bodyContainer">
            <Navbar />
            <div className = "bodyText">
                <h1 className="section-head">Welcome to Mechanic Management!</h1>
                <h2 className="section-head-2">Checking Your Vehicle's Status?</h2>
                <div className = "paraContainer">
                    <p className="paraText">
                       <i>A Phone Number and a Click Away. </i>
                    </p>
                    <CustomerForm />
                </div>
            </div>
            {/* <Footer />  */}
        </div>
    )
};

export default Body;

// Need code to add a "dropdown" area for the Customer to enter their phonenumber
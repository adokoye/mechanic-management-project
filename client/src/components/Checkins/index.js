import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import "./Checkins.css"
import { ADD_CUSTOMER } from "../../utils/mutations"
import Auth from "../../utils/auth";

function Checkins(props) {
    const [formState, setFormState] = useState
    ({
        firstName:"", lastName:"", cellPhone:"", make:"", model:"", color:""
    });
    const [addCustomer, { error }] = useMutation(ADD_CUSTOMER);

    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
          const mutationResponse = await addCustomer
          ({ 
              variables: { firstName: formState.firstName, lastName: formState.lastName, cellPhone: formState.cellPhone, make: formState.make, model: formState.model, color: formState.color  }
            })
          
        } catch (e) {
          console.log(e)
        }
      };

        const handleChange = event => {
            const { name, value } = event.target;
            setFormState({
              ...formState,
              [name]: value
            });
          };

    return (

        <form className="checkin" onSubmit={handleFormSubmit}>
        <div className= "checkins-inner">
           <h1>Check-in</h1>
           
                <div className="checkins-group">
               <label htmlFor="firstName" >First Name: </label>
               <input type="text" name="firstName" autoComplete="off" id="firstName" 
                onChange={handleChange}/>
               </div>

                <div className="checkins-group">
               <label htmlFor="lastName" >Last Name: </label>
               <input type="text" name="lastName" autoComplete="off" id="lastName"
                onChange={handleChange}/>
               </div>

               <div className="checkins-group">
               <label htmlFor="cellPhone">Phone Number: </label>
               <input name="cellPhone" id="cellPhone" type="tel" pattern="^\d{3}-\d{3}-\d{4}$" autoComplete="off" required placeholder="xxx-xxx-xxxx"
                onChange={handleChange}></input>
               </div>

               <div className="checkins-group">
               <label htmlFor="make" > Make: </label>
               <input type="text" name="make" autoComplete="off" id="make"
                onChange={handleChange}/>
               </div>

               <div className="checkins-group">
               <label htmlFor="model" > Model: </label>
               <input type="text" name="model" autoComplete="off" id="model"
                onChange={handleChange}/>
               </div>

               <div className="checkins-group">
               <label htmlFor="color" > Color: </label>
               <input type="text" name="color" autoComplete="off" id="color"
                onChange={handleChange}/>
               </div>

               <input className= "checkin-btn" type="submit" value="Send to the shop"/>
            
        </div>
    </form>

    )
}

export default Checkins;
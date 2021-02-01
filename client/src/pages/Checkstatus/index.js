import React, { useState } from "react";
import $ from 'jquery'; 
import "./Checkstatus.css"
import { useMutation } from '@apollo/react-hooks';
import { CHECK } from "../../utils/mutations";

function CheckStatus () {
  
  let ggg = localStorage.getItem('cellPhone')
  console.log(ggg + ' On check status Page')

  // // const { data } = useQuery(QUERY_CUSTOMER);
  let customer;

  const [formState, setFormState] = useState({ cellPhone: '' })
    const [checkIn, { error }] = useMutation(CHECK);
    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
          const mutationResponse = await checkIn({ variables: { cellPhone: formState.cellPhone} })
        } catch (e) {
          console.log(e)
        }
      };


  // if (data) {
  //   customer = data.customer;
  //   console.log(customer + 'Hello')
  // }
  // else {
  //   console.log('No data found')
  // }



  return (
  <>
  <p>Howdy! This will display your info!</p>
    {customer ? (
      <>
      <h2>Vehicle History for {customer.firstName} {customer.lastName}</h2>
      {customer.repairs.map((repair) => (
        <div key={repair._id} className="my-2">
          <h3>{new Date(parseInt(repair.purchaseDate)).toLocaleDateString()}</h3>
          <div className="flex-row">
            {repair.parts.map(({ _id, name, price, description, quantity }, index) => (
              <div key={index} className="card px-1 py-1">
                  <i>{_id}</i>
                  <p>{name}</p><hr />
                  <p>{description}</p><hr />
                  <p>{quantity}</p><hr />
                <div>
                  <span>${price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
      ) : null}
    </>);
  }
;

export default CheckStatus;
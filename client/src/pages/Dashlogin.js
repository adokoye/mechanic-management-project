import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import LoginBtn from '../components/loginBtn';
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations"
import Auth from "../utils/auth";
import "../components/LoginForm/LoginForm.css"

function Dashlogin({props}) {

    const [formState, setFormState] = useState({ email: '', password: '' })
    const [login, { error }] = useMutation(LOGIN);
    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
          const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } })
          const token = mutationResponse.data.login.token;
          Auth.login(token);
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
    <form className="adminform" onSubmit={handleFormSubmit}>
      
        <div className= "form-inner">
           <h1>Mecanico</h1>
           <p className="lp">Admin Login</p>

           {(error !== "") ? (<div className="error">{error}</div>) : ""}

           <div className="form-group">
                <label htmlFor="email">Email address</label>
                    <input
                    className="lt"
                    placeholder="email@t.com"
                    name="email"
                    type="email"
                    id="email"
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="pwd">Password</label>
                    <input
                    className="lt"
                    placeholder="******"
                    name="password"
                    type="password"
                    id="pwd"
                    onChange={handleChange}
                />
          </div>
          {
          error ? <div>
            <p className="error-text" >The provided credentials are incorrect</p>
          </div> : null
          }
          
        <LoginBtn/>

        <Link className= "btn" to="/KuceCU3bbD3EmURTEwty">
          Sign-Up
        </Link>
        </div>
    </form>
    )
};

export default Dashlogin;

// <div className="container">
//      {(user.email != "") ? (
//        <div className="dashboard">
//         <Route exact component= {Dashboard}/>
    
//        <button onClick={Logout}>Logout</button>
//        </div>
//      ) : (
//      <LoginForm Login={Login} error={error}/>)}
//     </div>
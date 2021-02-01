import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import { Link } from "react-router-dom";
import SignBtn from '../components/signBtn';
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
import "../components/LoginForm/LoginForm.css"

function DashSign(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [addUser] = useMutation(ADD_USER);
  
    const handleFormSubmit = async event => {
      event.preventDefault();
      const mutationResponse = await addUser({
        variables: {
          email: formState.email, password: formState.password,
        }
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
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
        <Link to="/f9MecEJ2vtKaYM3rEh48">
          ← Go to Login
        </Link>

        <div className= "form-inner">
        <h1>Mecanico</h1>
        <p className="lp">Admin Sign-Up</p>
        

          <div className="form-group">
                <label htmlFor="email">Email</label>
                    <input
                    placeholder="youremail@test.com"
                    name="email"
                    type="email"
                    id="email"
                    onChange={handleChange}
                />
          </div>

          <div className="form-group">
                <label htmlFor="pwd">Password</label>
                    <input
                    placeholder="******"
                    name="password"
                    type="password"
                    id="pwd"
                    onChange={handleChange}
                />
            </div>
            <SignBtn />
          </div>
        </form>
    );
}

export default DashSign;
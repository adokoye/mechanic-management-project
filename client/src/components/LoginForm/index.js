// import React, { useState } from "react";
// import { useMutation } from '@apollo/react-hooks';
// import LoginBtn from '../loginBtn';
// import './LoginForm.css';
// import { LOGIN } from "../../utils/mutations"
// import Auth from "../../utils/auth";

// function LoginForm({props}) {

//     const [formState, setFormState] = useState({ email: '', password: '' })
//     const [login, { error }] = useMutation(LOGIN);
//     const handleFormSubmit = async event => {
//         event.preventDefault();
//         try {
//           const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } })
//           const token = mutationResponse.data.login.token;
//           Auth.login(token);
//         } catch (e) {
//           console.log(e)
//         }
//       };

//     const handleChange = event => {
//         const { name, value } = event.target;
//         setFormState({
//           ...formState,
//           [name]: value
//         });
//       };


//     return (
//     <form className="adminform" onSubmit={handleFormSubmit}>
//         <div className= "form-inner">
//            <h1>Mecanico</h1>
//            <p className="lp">Admin Dashboard</p>
           
//            {(error !== "") ? (<div className="error">{error}</div>) : ""}

//            <div className="form-group">
//                 <label htmlFor="email">Email address</label>
//                     <input
//                     className="lt"
//                     placeholder="email@t.com"
//                     name="email"
//                     type="email"
//                     id="email"
//                     onChange={handleChange}
//                 />
//             </div>

//             <div className="form-group">
//                 <label htmlFor="pwd">Password</label>
//                     <input
//                     className="lt"
//                     placeholder="******"
//                     name="password"
//                     type="password"
//                     id="pwd"
//                     onChange={handleChange}
//                 />
//           </div>
//           {
//           error ? <div>
//             <p className="error-text" >The provided credentials are incorrect</p>
//           </div> : null
//         }
//         <LoginBtn/>
//         </div>
//     </form>
//     )
// };

// export default LoginForm;

// {/* <form className="adminform" onSubmit={submitHandler}>
//            <div className= "form-inner">
//            <h1>Mecanico</h1>
//            <p className="lp">Admin Dashboard</p>
           
//            {(error !== "") ? (<div className="error">{error}</div>) : ""}

//            <div className="form-group">
//                <label htmlFor="email" >Email: </label>
//                <input type="email" name="email" autoComplete="off" id="email" onChange={e => setDetails({...details, email: e.target.value })} value={(details.email)}/>
//                </div>

//                <div className="form-group">
//                <label htmlFor="password">Password: </label>
//                <input type="password" name="password" id="password"onChange={e => setDetails({...details, password: e.target.value })} value={(details.password)}></input>
//                </div>

//                <LoginBtn/>
//         </div>
//        </form> */}

// LoginForm in components has been replaced by Dashlogin
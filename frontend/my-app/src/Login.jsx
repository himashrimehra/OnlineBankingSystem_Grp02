import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import UserService from "./service/UserService";

export const Login = (props) => {
    const initialValues = { username: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false); //flag for submit
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(email);
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        UserService.loginService({
          username: formValues.username,
          password: formValues.password
        }).then((response)=> {
          if(response.data){
            alert("Welcome " + response.data.userName);
          }
          else alert("Error occured");
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formValues);
        }
      }, [formErrors]); //will get changed based on formErrors

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
          errors.username = "Username is required!";
        }
        if (!values.password) {
          errors.password = "Password is required!";
        } else if (values.password.length < 6) {
          errors.password = "Password must be more than 8 characters.";
        } else if (values.password.length > 16) {
          errors.password = "Password cannot exceed more than 16 characters.";
        }
        return errors;
      };    

    return (
        <div className="auth-form-container">
            {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className="ui message success">Signed in successfully</div>
            ) : (
                console.log("")
            )}
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label>Username</label>
                <input value={formValues.username} onChange={handleChange} type="text" placeholder="username" id="username" name="username" />
                <p className="hidden">{formErrors.username}</p>
                <label htmlFor="password">Password</label>
                <input value={formValues.password} onChange={handleChange} type="password" placeholder="********" id="password" name="password" />
                <p className="hidden">{formErrors.password}</p>
                <button type="submit">Log In</button>
            </form>
            <Link to={'/forgotpassword'} className="link-btn">Forgot Password?</Link>
            <Link to ={"/register"} className="link-btn">Create new registration</Link>
        </div>
    )
}
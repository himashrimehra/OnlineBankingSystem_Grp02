import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export const Login = (props) => {
    const initialValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false); //flag for submit
    const navigate = useNavigate();

    async function login(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/users/createUser", {
            email: formValues.email,
            password: formValues.password,
            }).then((res) => 
            {
             console.log(res.data);
             
             if (res.data.message == "Email does not exist") 
             {
               alert("Email does not exist");
             } 
             else if(res.data.message == "Login Successful!")
             { 
                
                console.log("Login successful!");
                navigate('/home');
             } 
              else 
             { 
                alert("Incorrect Email and Password fields do not match");
             }
          }, fail => {
           console.error(fail); // Error!
  });
        }
 
         catch (err) {
          alert(err);
        }
      
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(email);
        setFormErrors(validate(formValues));
        setIsSubmit(true);
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
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
          errors.password = "Password is required!";
        } else if (values.password.length < 8) {
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
                <label htmlFor="email">Email</label>
                <input value={formValues.email} onChange={handleChange} type="email" placeholder="youremail@email.com" id="email" name="email" />
                <p className="hidden">{formErrors.email}</p>
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
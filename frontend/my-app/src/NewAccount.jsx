import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export const NewAccount = (props) => {
    const initialValues = { title: "", fname: "", mname: "", lname: "", fathername: "", phone: "", email: "", aadharcard: "", dob: "", address1: "", address2: "",
                            landmark: "", state: "", city: "", pincode: "", occupationtype: "", sourceofincome: "", grossannualincome: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false); //flag for submit
    const navigate = useNavigate();

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
        if (!values.title) {
            errors.title = "Title is required!";
        } 
        if (!values.fname) {
            errors.fname = "First Name is required!";
        } 
        if (!values.lname) {
            errors.lname = "Last Name is required!";
        } 
        if (!values.fathername) {
            errors.fathername = "Father's name is required!";
        } 
        if (!values.phone) {
            errors.phone = "Phone Number is required!";
        } 
        if (!values.aadharcard) {
            errors.aadharcard = "Aadhar Card Number is required!";
        } 
        if (!values.dob) {
            errors.dob = "Date of Birth is required!";
        } 
        if (!values.address1) {
            errors.address1 = "Address is required!";
        } 
        if (!values.address2) {
            errors.address2 = "Address is required!";
        } 
        if (!values.state) {
            errors.state = "State is required!";
        } 
        if (!values.city) {
            errors.city = "City is required!";
        } 
        if (!values.pincode) {
            errors.pincode = "Pincode is required!";
        } 
        if (!values.occupationtype) {
            errors.occupationtype = "Occupation type is required!";
        } 
        if (!values.sourceofincome) {
            errors.sourceofincome = "Source of income is required!";
        } 
        if (!values.grossannualincome) {
            errors.grossannualincome = "Gross annual income is required!";
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
            <h2>Create New Account</h2>
            <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="title">Title*</label>
            <input value={formValues.title} name="title" onChange={handleChange} id="title" placeholder="Ms/Mr/Mrs" />
            <p className="hidden">{formErrors.title}</p>

            <label htmlFor="fname">First Name*</label>
            <input value={formValues.fname} onChange={handleChange} placeholder="" id="fname" name="fname" />
            <p className="hidden">{formErrors.fname}</p>
            
            <label htmlFor="mname">Middle Name</label>
            <input value={formValues.mname} name="mname" onChange={handleChange} id="mname" placeholder="" />
            
            <label htmlFor="lname">Last Name*</label>
            <input value={formValues.lname} onChange={handleChange} placeholder="" id="lname" name="lname" />
            <p className="hidden">{formErrors.lname}</p>

            <label htmlFor="fathername">Father's Name*</label>
            <input value={formValues.fathername} name="fathername" onChange={handleChange} id="fathername" placeholder="" />
            <p className="hidden">{formErrors.fathername}</p>

            <label htmlFor="phone">Phone number*</label>
            <input value={formValues.phone} name="phone" onChange={handleChange} id="phone" placeholder="" />
            <p className="hidden">{formErrors.phone}</p>
                
            <label htmlFor="email">Email</label>
            <input value={formValues.email} onChange={handleChange} type="email" placeholder="youremail@email.com" id="email" name="email" />
            <p className="hidden">{formErrors.email}</p>

            <label htmlFor="aadharcard">Aadhar Card Number*</label>
            <input value={formValues.aadharcard} name="aadharcard" onChange={handleChange} id="aadharcard" placeholder="" />

            <label htmlFor="dob">Date of Birth*</label>
            <input value={formValues.dob} name="dob" onChange={handleChange} id="dob" placeholder="" />
            
            <h4>Residential Address</h4>
            
            <label htmlFor="address1">Address Line 1*</label>
            <input value={formValues.address1} name="address1" onChange={handleChange} id="address1" placeholder="" />
            <p className="hidden">{formErrors.address1}</p>

            <label htmlFor="address2">Address Line 2*</label>
            <input value={formValues.address2} name="address2" onChange={handleChange} id="address2" placeholder="" />
            <p className="hidden">{formErrors.address2}</p>

            <label htmlFor="landmark">Landmark</label>
            <input value={formValues.landmark} name="landmark" onChange={handleChange} id="landmark" placeholder="" />

            <label htmlFor="state">State*</label>
            <input value={formValues.state} name="state" onChange={handleChange} id="state" placeholder="" />
            <p className="hidden">{formErrors.state}</p>

            <label htmlFor="city">City*</label>
            <input value={formValues.city} name="city" onChange={handleChange} id="city" placeholder="" />
            <p className="hidden">{formErrors.city}</p>

            <label htmlFor="pincode">Pincode*</label>
            <input value={formValues.pincode} name="pincode" onChange={handleChange} id="pincode" placeholder="" />    
            <p className="hidden">{formErrors.pincode}</p>

            <h4>Permanent Address</h4>
            <h5>Permanent address same as Mailing Address</h5>

            <label htmlFor="address1">Address Line 1*</label>
            <input value={formValues.address1} name="address1" onChange={handleChange} id="address1" placeholder="" />
            <p className="hidden">{formErrors.address1}</p>

            <label htmlFor="address2">Address Line 2*</label>
            <input value={formValues.address2} name="address2" onChange={handleChange} id="address2" placeholder="" />
            <p className="hidden">{formErrors.address2}</p>

            <label htmlFor="landmark">Landmark</label>
            <input value={formValues.landmark} name="landmark" onChange={handleChange} id="landmark" placeholder="" />

            <label htmlFor="state">State*</label>
            <input value={formValues.state} name="state" onChange={handleChange} id="state" placeholder="" />
            <p className="hidden">{formErrors.state}</p>

            <label htmlFor="city">City*</label>
            <input value={formValues.city} name="city" onChange={handleChange} id="city" placeholder="" />
            <p className="hidden">{formErrors.city}</p>

            <label htmlFor="pincode">Pincode*</label>
            <input value={formValues.pincode} name="pincode" onChange={handleChange} id="pincode" placeholder="" />    
            <p className="hidden">{formErrors.pincode}</p>

            <h4>Occupation Details</h4>

            <label htmlFor="occupationtype">Occupation Type*</label>
            <input value={formValues.occupationtype} name="occupationtype" onChange={handleChange} id="occupationtype" placeholder="" />    
            <p className="hidden">{formErrors.occupationtype}</p>

            <label htmlFor="sourceofincome">Source of Income*</label>
            <input value={formValues.sourceofincome} name="sourceofincome" onChange={handleChange} id="sourceofincome" placeholder="" />    
            <p className="hidden">{formErrors.sourceofincome}</p>

            <label htmlFor="grossannualincome">Gross Annual Income*</label>
            <input value={formValues.grossannualincome} name="pincogrossannualincomede" onChange={handleChange} id="grossannualincome" placeholder="" />    
            <p className="hidden">{formErrors.grossannualincome}</p>

            {/* <h4>Debit/ATM Card</h4>
            <h5>Do you want a debit card?</h5>
            <h5>Opt for Net Banking</h5> 
            <h5>I agree</h5> */}
            
            <button type="submit">Create Account</button>
            </form>
        </div>
    )
}
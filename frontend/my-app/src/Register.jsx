import React, { useState } from "react";
import {Link} from "react-router-dom";
import RegisterService from "./service/RegisterService";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [resaddress, setResAddress] = useState('');
    const [permanentaddress, setPermanentAdress] = useState('');
    const [aadharcard, setAadhar] = useState('');
    const [dob, setDob] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        RegisterService.registerService({
            userId: name,
            accountNumber: email,
            passcode: pass
        }).then(respone => {
            if(respone.data != null) {
                alert("Success")
            }
        })
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="username">Username</label>
            <input value={username} name="username" onChange={(e) => setUsername(e.target.value)} id="username" placeholder="username" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            
            <label htmlFor="phone">Phone number</label>
            <input value={phone} name="phone" onChange={(e) => setPhone(e.target.value)} id="phone" placeholder="Phone number" />
            
            <label htmlFor="resaddress">Residential Address</label>
            <input value={resaddress} name="resaddress" onChange={(e) => setResAddress(e.target.value)} id="resaddress" placeholder="Residential Address" />
            
            <label htmlFor="permanentaddress">Permanent Address</label>
            <input value={permanentaddress} name="permanentaddress" onChange={(e) => setPermanentAdress(e.target.value)} id="permanentaddress" placeholder="Permanent Address" />

            <label htmlFor="aadharcard">Aadhar Card Number</label>
            <input value={aadharcard} name="aadharcard" onChange={(e) => setAadhar(e.target.value)} id="aadharcard" placeholder="Aadhar Card Number" />

            <label htmlFor="dob">Date of Birth</label>
            <input value={dob} name="dob" onChange={(e) => setDob(e.target.value)} id="dob" placeholder="Date of Birth" />

            <button type="submit">Register</button>
        </form>
        <p><Link to ={"/"} className="link-btn">Already have an account? Login here.</Link></p>
    </div>
    )
}
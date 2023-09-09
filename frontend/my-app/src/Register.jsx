import React, { useState, useEffect } from "react";

export const Register = (props) => {
    // const [email, setEmail] = useState('');
    // const [pass, setPass] = useState('');
    // const [name, setName] = useState('');
    const initialValues = { email: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

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
      }, [formErrors]); 

      const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        return errors;
      };    

    return (
        <div className="auth-form-container">
        {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className="ui message success">OTP sent to the requested Email ID.</div>
            ) : (
                console.log("")
            )}
            <h2>Reset Password</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            {/* <label htmlFor="name">Full Name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" /> */}
            <label htmlFor="email">Email</label>
            <input value={formValues.email} onChange={handleChange}type="email" placeholder="youremail@email.com" id="email" name="email" />
            <p>{formErrors.email}</p>
            {/* <label htmlFor="password">Enter new password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" /> */}
            <button type="submit">Send OTP for verification</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}
import React from 'react';
import { Link } from 'react-router-dom';
import './successpage.css'; 

function Successpage() {
  return (
    <div className="success-container">
      <h2>Congratulations!</h2>
      <p>Your request has been successfully submitted to open an account in our bank!</p>
      <p>You are requested to wait for the admin to approve your request.</p>
      <p><Link to="/login">Click here</Link> to go back to the login page.</p>
    </div>
  );
}

export default Successpage;
import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { ForgotPassword } from "./ForgotPassword";
import {Register} from "./Register";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {/* {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <ForgotPassword onFormSwitch={toggleForm} />
      } */}
      <BrowserRouter>
            <Routes>
              <Route path="/" element= { <Login/>} />
              <Route path="/forgotpassword" element= { <ForgotPassword/>} />
              <Route path="/register" element= { <Register/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

import {React, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './navbar'; 
import Footer from './footer'; 
import './home.css';

const Home = () => {

  const usenavigate = useNavigate();

  useEffect(()=>{
    let token = sessionStorage.getItem('JwtToken');
    if(!(token===''||token===null)){
        usenavigate('/dashboard');
    }
  },[usenavigate]);

  return (
    <div>
      <Navbar />
      <div className="home-container">
        {/* <h2 style={{color: "black"}}>Welcome to our Online Banking Application</h2> */}
        <img className="img-size" src="https://minibankindia.com/assets/img/bbps/postpaid.png"></img>
        <button className="btn btn-primary">
          <Link className="weight" to="/login">Login</Link>
        </button> 
        <div className="space"></div>
        <button className="btn btn-primary">
          <Link className="weight" to="/openAccount">New User? Apply for an account</Link>
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

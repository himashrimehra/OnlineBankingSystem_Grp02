import React from 'react';
import './dashboardNavbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const DashboardNavbar = () => {

  const usenaviagte = useNavigate();

  const handleLogout = (e) => {
    sessionStorage.clear();
    usenaviagte('/');
  }

  return (
    <Navbar expand="lg" className="navbar-body">
      <Container>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <NavDropdown title="Fund Transfer" id="basic-nav-dropdown">
              
              <NavDropdown.Item >
                <Link style={{textDecoration: "none", color: "black"}} to = {"/payment"} >Quick Transfer</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
                
                <Link style={{textDecoration: "none", color: "black"}} to ={"/withdraw"} >Withdraw Money</Link>

              </NavDropdown.Item>
            </NavDropdown>
            {/* <LinkContainer to="/resetPassword">
            <Nav.Link >Change Password</Nav.Link>
            </LinkContainer> */}

            

          </Nav>
          <Nav.Link className='float-right text-danger' to ={"/login"} onClick={handleLogout}>Logout</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
};

export default DashboardNavbar;

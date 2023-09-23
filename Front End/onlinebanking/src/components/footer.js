import React from 'react';
import './footer.css';

const Footer = () => {
  const year=new Date().getFullYear();
  return (
    <footer className="footer">
    Copyright &copy; {year}
    </footer>
  );
};

export default Footer;

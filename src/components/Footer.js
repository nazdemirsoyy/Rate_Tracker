import React from "react";
import styles from './Footer_module.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
      <p>Company info: <a className= "linkStyle" href="http://www.example.com" target="_blank" rel="noopener noreferrer">Qualak</a> </p>
        <p>© 2024 Qualak</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'; // Import your custom CSS file

const Header = () => {
  return (
    <header className="fixed-top">
      <div className="container">
        <div className="header-content">
          <div className="logo-container">
            {/* Replace 'your-logo.png' with your actual logo file */}
            <img
              src="https://eduquest.org.in/wp-content/uploads/2020/11/logo40.png"
              alt="Logo"
              className="logo"
            />
          </div>
          <div className="button-container">
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
            <Link to="/register" className="btn btn-success">
              Register
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import './contact.css'; 

const Contact = () => {
  return (
    <div>
        <header className="header">
        <img
          src="https://eduquest.org.in/wp-content/uploads/2020/11/logo40.png"
          alt="Logo"
          className="logo"
        />
        <nav className="links">
          <Link to="/Second">Menu</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Feedback">Feedback</Link>
          <Link to="/Assignment">Assignment</Link>
          <Link to="/Certificate">Certificate</Link>
        </nav>
      </header>
    <div className="contact-container">
      <div className="left-side">
      <div className="about-eduquest">
        <br/><br/>
          <h2>About EduQuest</h2>
          <p className='para1'>
            Eduquest is a leading educational platform dedicated to providing high-quality
            educational resources and support to students worldwide. Our mission 
            is to empower learners to achieve their educational goals and aspirations.
          </p>
        </div>
        <div className="contact-info">
          <h2><FontAwesomeIcon icon={faMapMarkerAlt} /> Address</h2>
          <p>123 Main Street, City, Country</p><br/>
          <h2><FontAwesomeIcon icon={faPhone} /> Let's Talk</h2>
          <p>+1 (123) 456-7890</p><br/>
          <h2><FontAwesomeIcon icon={faEnvelope} /> General Support</h2>
          <p>support@eduquest.com</p>
        </div>
      </div>
      <div className="right-side">
        <br/><br/>
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name" className="label">Name:</label>
            <input type="text" id="name" name="name" className='input' required />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="label">Email:</label><input type="email" id="email" name="email" className='input' required />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="label">Message:</label>
            <textarea id="message" name="message" className='input' required></textarea>
          </div>
          <button type="submit" className='button'>Send</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;
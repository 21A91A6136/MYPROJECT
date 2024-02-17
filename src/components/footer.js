// client/src/components/Footer.js
import React from 'react';
import '../footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <div className="site-footer">
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4>Contact Us</h4>
              <p>Email: info@eduquest.org</p>
              <p>Phone: (123) 456-7890</p>
            </div>
            <div className="col-md-4">
              <h4>Follow Us</h4>
              <p>Facebook</p>
              <p>Twitter</p>
              <p>Instagram</p>
            </div>
            <div className="col-md-4">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/feedback">Feedback</a></li>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

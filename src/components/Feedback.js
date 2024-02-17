import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './feedback.css';

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Feedback:', this.state);
  };

  render() {
    return (
      <div className='Feedback1'>
        <img src="feedback.jpg" alt=" " className='feedbackcontainer'/>
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
        <Card variant="outlined" className="feedback-container">
        <CardContent>
          <Typography variant="h5" className="feedback-header">
            Feedback Form
          </Typography>
          <form onSubmit={this.handleSubmit}>
            <div className="form-section">
              <TextField
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
                required
                label="Name"
                fullWidth
                variant="outlined"
              />
            </div>
            <div className="form-section">
              <TextField
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                required
                label="Email"
                fullWidth
                variant="outlined"
              />
            </div>
            <div className="form-section">
              <TextField
                name="subject"
                value={this.state.subject}
                onChange={this.handleInputChange}
                required
                label="Subject"
                fullWidth
                variant="outlined"
              />
            </div>
            <div className="form-section">
              <TextField
                name="message"
                value={this.state.message}
                onChange={this.handleInputChange}
                required
                label="Message"
                fullWidth
                multiline
                rows={4}
                variant="outlined"
              />
            </div>
            <Button type="submit" variant="contained" color="primary" className="submit-button">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
      </div>
    );
  }
}
export default Feedback;
// React component
import React from 'react';
import { Link } from 'react-router-dom';
import './second.css';

function Second() {
  return (
    <div>
      <img src="secondbg.webp" alt="" className="bg2" />
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
      <div className="card-container">
        <div className="card card1">
          <Link to="/Todolist">
            <button className="card-button">To Do List</button>
          </Link>
        </div>

        <div className="card card2">
          <Link to="/CourseContent">
            <button className="card-button">RoadMap</button>
          </Link>
        </div>

        <div className="card card3">
          <Link to="/Resources">
            <button className="card-button">Resources</button>
          </Link>
        </div>

        <div className="card card4">
          <Link to="/Video1">
            <button className="card-button">VideoLectures</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Second;

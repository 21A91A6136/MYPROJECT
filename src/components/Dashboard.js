// client/src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <header>
        {/* Header with links */}
        <nav>
          <Link to="/contact">Contact</Link>
          <Link to="/feedback">Feedback</Link>
          <Link to="/assignments">Assignments</Link>
          <Link to="/certification">Certification</Link>
          <Link to="/menu">Menu</Link>
        </nav>
      </header>
      <main>
        {/* Cards with pictures and links */}
        <div className="card">
          <img src="path_to_image" alt="Description" />
          <Link to="/todolist">Todo List</Link>
        </div>
        <div className="card">
          <img src="path_to_image" alt="Description" />
          <Link to="/roadmap">Roadmap</Link>
        </div>
        <div className="card">
          <img src="path_to_image" alt="Description" />
          <Link to="/resources">Resources</Link>
        </div>
        <div className="card">
          <img src="path_to_image" alt="Description" />
          <Link to="/videolectures">Video Lectures</Link>
        </div>
      </main>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default Dashboard;

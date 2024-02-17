import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Roadmap from './roadmap';
import { Link } from 'react-router-dom';
const courses = [
 
  { id: 'python', name: 'Python' },
  { id: 'java', name: 'Java' },
  { id: 'fullstack', name: 'Full Stack Devlopment' },
  { id: 'ai', name: 'Artificail Intelligence' },
  { id: 'ml', name: 'Machine Learning' },
  { id: 'devops', name: 'DevOps' },
  { id: 'arvr', name: 'AR & VR' },
  { id: 'redhat', name: 'Red Hat' },
  { id: 'dataanalyst', name: 'Data Analyst' },
  { id: 'datascience', name: 'Data Science' },
];

function CourseContent() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
  };

  return (
  <div className='division'>
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
    <Container>
      <Row>
        <h1>Roadmap</h1>
        <Col md={4}>
          <br/>
          <h2>Courses</h2>
          <br/>
          <br/>
          <div className="course-buttons">
            {courses.map((course) => (
              <Button
                key={course.id}
                onClick={() => handleCourseSelect(course.id)}
                variant="info"
                className="mb-2 d-block"
              >
                {course.name}
              </Button>
            ))}
          </div>
        </Col>
        <Col md={8}>
          <Roadmap selectedCourse={selectedCourse} />
        </Col>
      </Row>
    </Container>
  </div>
  );
}

export default CourseContent;
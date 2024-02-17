import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import './roadmap.css';

const roadmapData = {
  ai: {
    name: 'Artificial Intelligence',
    description: 'Learn the fundamentals of AI and its applications.',
    image: 'AI.jpg',
  },
  ml: {
    name: 'Machine Learning',
    description: 'Explore the world of machine learning and predictive modeling.',
    image: 'MachineLearning.webp',
  },
  python: {
    name: 'Python Programming',
    description: 'Master the Python language and its various applications.',
    image: 'Python.jpg',
  },
  java: {
    name: 'Java Programming',
    description: 'Become proficient in Java programming and development.',
    image: 'java.jpg',
  },
  fullstack: {
    name: 'Full Stack Development',
    description: 'Learn both front-end and back-end development for web applications.',
    image: 'FSD.jpg',
  },
  devops: {
    name: 'DevOps Practices',
    description: 'Explore DevOps principles and practices for efficient development.',
    image: 'Devops.jpg',
  },
  arvr: {
    name: 'Augmented & Virtual Reality',
    description: 'Dive into the world of AR and VR technologies and applications.',
    image: 'VR_AR.jpg',
  },
  redhat: {
    name: 'Red Hat Certification',
    description: 'Prepare for Red Hat certification exams and become a Linux pro.',
    image: 'RedHat.png',
  },
  dataanalyst: {
    name: 'Data Analyst',
    description: 'Learn data analysis and visualization techniques for data-driven decisions.',
    image: 'Data_analyst.jpg',
  },
  datascience: {
    name: 'Data Science',
    description: 'Master data science tools and techniques for data-driven insights.',
    image: 'Data_scientist.jpg',
  },
};

const Roadmap = ({ selectedCourse }) => {
  const course = roadmapData[selectedCourse];

  if (!course) {
    return null;
  }

  return (
  <div>
    <Row>
      <Col md={6}>
        <br/><br></br><br/>
        <Card>
          <Card.Img variant="top" src={course.image} />
          <Card.Body>
            <Card.Title>{course.name}</Card.Title>
            <Card.Text>{course.description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div className="additional-content">
          <h3 className='heading3'>Why Choose {course.name}?</h3>
          <p className='para'>
            {course.name} is a fascinating field that offers numerous opportunities in various industries. By mastering {course.name}, you can unlock a wide range of career prospects and make a significant impact in the world of technology.
          </p>
        </div>
      </Col>
    </Row>
  </div>
  );
};

export default Roadmap;
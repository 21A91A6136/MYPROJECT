import React from 'react';
import { Link } from 'react-router-dom';
import './Assignment.css';

const Assignment = () => {
    const assignments = [
        {
          id: 1,
          title: 'Python',
          description: '"Python is executable pseudocode." - Bruce Eckel',
        },
        {
          id: 2,
          title: 'Ml',
          description: '"Innovation for everyone." - Xiaomis official slogan',
        },
        {
          id: 3,
          title: 'AI',
          description: '"Artificial intelligence is the new electricity." - Andrew Ng',
        },
        {
          id: 4,
          title: 'Redhat',
          description: '"Open source is not a question of price, its a different way of innovating and doing business." - Jim Whitehurst, Former CEO of Red Hat',
        },
        {
          id: 5,
          title: 'Pega',
          description: '"Pega technology is designed to help organizations optimize their operations and deliver superior customer experiences." - Alan Trefler',
        },
        {
          id: 6,
          title: 'HTML',
          description: '"HTML is the language that makes the web understandable to humans." - David Siegel',
        },
        {
          id: 7,
          title: 'CSS',
          description: '"CSS is the design language of the web." - Jeffrey Veen',
        },
        {
          id: 8,
          title: 'Java',
          description: '"Java is to JavaScript what car is to carpet." - Chris Heilmann',
        },
        {
          id: 9,
          title: 'C',
          description: '"C is the lingua franca of programming." - Brian Kernighan',
        },
        {
          id: 10,
          title: 'Bootstrap',
          description: '"Bootstrap is a design framework that allows developers to create beautiful, responsive, and consistent web interfaces with less effort and more efficiency."',
        },
        {
          id: 11,
          title: 'DS',
          description: '"Data science is not just about data; its about using data to create actionable insights and drive informed decision-making."',
        },{
          id: 12,
          title: 'AR/VR',
          description: '"Augmented reality and virtual reality will become the new way we interact with and interpret the digital world, bridging the gap between the digital and physical realms." ',
        },{
          id: 13,
          title: 'DA',
          description: '"Data analytics is the art and science of finding meaningful patterns in data and using them to inform decision-making." ',
        },
        {
          id: 14,
          title: 'Devops',
          description: '"DevOps is not a goal, but a never-ending process of continual improvement." - Jez Humble',
        },
        {
          id: 15,
          title: 'Ui/Ux',
          description: '"Good design is obvious. Great design is transparent." - Joe Sparano',
        },
      ];    

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
      <div className="assignment">
        <h2>Assignment</h2>
        <div className="card-container2">
          {assignments.map((assignment) => (
            <div key={assignment.id} className="card8">
              <div className="card-body1">
                <h5 className="card-title1">{assignment.title}</h5>
                <p className="card-text1">{assignment.description}</p>
                <Link to="/quiz">
                  <button className="start-quiz-button">Start Quiz</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Assignment;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';

const Quiz = () => {
  const questions = [
    {
      id: 1,
      question: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      correctAnswer: '4',
    },
    {
      id: 2,
      question: 'What is the capital of France?',
      options: ['London', 'Berlin', 'Madrid', 'Paris'],
      correctAnswer: 'Paris',
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(''));
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [timer, setTimer] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        clearInterval(interval);
        setQuizCompleted(true);
      }
    }, 1000);

    if (quizCompleted) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timer, quizCompleted]);

  const handleOptionSelect = (option) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestion] = option;
    setSelectedAnswers(updatedAnswers);
  };

  const checkAnswers = () => {
    setShowAnswers(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div className="quiz">
      <h2>Quiz</h2>
      {quizCompleted ? (
        <div>
          <p>Quiz Completed</p>
          <button className="check-answers-button" onClick={checkAnswers}>
            Check Answers
          </button>
        </div>
      ) : (
        <>
          <p>
            Question {currentQuestion + 1} of {questions.length}
          </p>
          {questions[currentQuestion] ? (
            <>
              <h3>{questions[currentQuestion].question}</h3>
              <ul>
                {questions[currentQuestion].options.map((option, index) => (
                  <li key={index}>
                    <label>
                      <input
                        type="radio"
                        name={`question-${questions[currentQuestion].id}`} // Use backticks for string interpolation
                        value={option}
                        checked={selectedAnswers[currentQuestion] === option}
                        onChange={() => handleOptionSelect(option)}
                      />
                      {option}
                    </label>
                  </li>
                ))}
              </ul>
              <button className="check-answers-button" onClick={handleNextQuestion}>
                Next Question
              </button>
            </>
          ) : (
            <p>No more questions available.</p>
          )}
        </>
      )}
      {!quizCompleted && (
        <p>Time Remaining: {Math.floor(timer / 60)}:{timer % 60 < 10 ? '0' : ''}{timer % 60}</p>
      )}
      {showAnswers && (
        <div>
          <h3>Correct Answers</h3>
          <ul>
            {questions.map((question) => (
              <li key={question.id}>
                {question.question} - {question.correctAnswer}
              </li>
            ))}
          </ul>
        </div>
      )}
      <Link to="/assignment">
        <button className="back-button">Back</button>
      </Link>
    </div>
  );
};

export default Quiz;

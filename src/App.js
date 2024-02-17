import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Second from './components/second';
import Todolist from './components/todolist';
import Resources from './components/resources';
import Roadmap from './components/roadmap';
import CategoryCard from './components/categorycard';
import CourseContent from './components/CourseContent';
import Video from './components/video';
import Video1 from './components/video1';
import Feedback from './components/Feedback'
import Contact from './components/contact';
import Certificate from './components/certificate';
import Assignment from './components/assignment';
import Quiz from './components/quiz';
function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch images from the backend
    fetch('http://localhost:5000/images')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setImages(data))
      .catch((error) => console.error('Error fetching images:', error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/Second' element={<Second/>}/>
          <Route path="/" element={<Home images={images} />} />
          <Route path='/Todolist' element={<Todolist/>}/>
          <Route path='/Roadmap' element={<Roadmap/>}/>
          <Route path='/Resources' element={<Resources/>}/>
          <Route path='/CategoryCard' element={<CategoryCard/>}/>
          <Route path='/CourseContent' element={<CourseContent/>}/>
          <Route path='/Video' element={<Video/>}/>
          <Route path='/Video1' element={<Video1/>}/>
          <Route path='/Feedback' element={<Feedback/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Certificate' element={<Certificate/>}/>
          <Route path='/Assignment' element={<Assignment/>}/>
          <Route path='/Quiz' element={<Quiz/>}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import Header from './Header';
import Footer from './footer';
import '../App.css';

const Home = ({ images }) => {
  return (
    <div className="container-fluid mt-4">
      <Header/>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {images.map((imageUrl, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img src={imageUrl} className="d-block w-100 img-fluid" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="mt-4">
        {/* Add content about the website here */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;

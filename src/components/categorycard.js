import React from 'react';
import './coursecode.css'

const CategoryCard = ({ category, description, imagePath, pdfLink }) => {
  return (
    <div className="category-card">
      <h3>{category}</h3>
      <img src={imagePath} alt={category} />
      <p>{description}</p>
      <a href={pdfLink} className="btn btn-primary" download>
        Download
      </a>
    </div>
  );
};

export default CategoryCard;
import React from 'react';
import './resource.css';
import CategoryCard from './categorycard';
import { Link } from 'react-router-dom';

const Resources = () => {
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
    <div className='hello1'>
     <center><h1>Resources</h1></center> 
      <div className="category-list">
        <CategoryCard
          category="AI"
          description="Learn about Artificial Intelligence."
          imagePath="https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124669.jpg?size=626&ext=jpg&ga=GA1.1.867424154.1698278400&semt=ais"
          pdfLink="https://www.uc.edu/content/dam/uc/ce/docs/OLLI/Page%20Content/ARTIFICIAL%20INTELLIGENCEr.pdf"
        />
        <CategoryCard
          category="Machine Learning"
          description="Explore the world of Machine Learning."
          imagePath="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlGtzVFvSaEyM1C3aop8J9LZn-O2BZIGeOmllbtbOFvOMAz9V2ynwvS06LqzXnj0stJK8&usqp=CAU"
          pdfLink="https://www.cs.cmu.edu/~hn1/documents/machine-learning/notes.pdf"
        />
        <CategoryCard
          category="Python"
          description="Master the Python programming language."
          imagePath="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVg2khdHzaHvCabuq8EMUCJYsE9P1VtL91V1nuj8gkIvFRW3eBUfXZ-Bp7J5sqKS3Tq1Y&usqp=CAU"
          pdfLink="https://cfm.ehu.es/ricardo/docs/python/Learning_Python.pdf"
        />
        <CategoryCard
          category="Java"
          description="Dive into the world of Java programming."
          imagePath="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiSgpeUKDYn6joflXmMoEopr_Y_8P9p8hMhw&usqp=CAU"
          pdfLink="https://www.iitk.ac.in/esc101/share/downloads/javanotes5.pdf"
        />
        <CategoryCard
          category="Fullstack"
          description="Become a Fullstack developer."
          imagePath="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqSwt6Uh8GFtJ1BV89pTAIdL2J-TWpUfPkbQ&usqp=CAU"
          pdfLink="https://mrcet.com/downloads/digital_notes/CSE/III%20Year/FULL%20STACK%20DEVELOPMENT(R20A0516).pdf"
        />
        <CategoryCard
          category="DevOps"
          description="Learn DevOps methodologies and tools."
          imagePath="https://octopus.com/devops/i/x/octopus-devops-infinity.png"
          pdfLink="https://www.happiestminds.com/whitepapers/devops.pdf"
        />
        <CategoryCard
          category="AR & VR"
          description="Explore Augmented and Virtual Reality."
          imagePath="https://www.analyticsinsight.net/wp-content/uploads/2021/08/Top-AR-VR-Courses-in-India-for-AR-and-VR-Enthusiast-to-Know.jpg"
          pdfLink="https://files.eric.ed.gov/fulltext/EJ1171588.pdf"
        />
        <CategoryCard
          category="Redhat"
          description="Red Hat Enterprise Linux resources."
          imagePath="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaGw_AfdxPELRl6yA2X5z30yxgMZqUROqvjQ&usqp=CAU"
          pdfLink="https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/pdf/system_administrators_guide/red_hat_enterprise_linux-7-system_administrators_guide-en-us.pdf"
        />
        <CategoryCard
          category="Data Analyst"
          description="Get started with Data Analysis."
          imagePath="https://images.yourstory.com/cs/2/96eabe90392211eb93f18319e8c07a74/DATAANALYTICSfinal-1686237252944.png?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces"
          pdfLink="https://online.hbs.edu/Documents/a-beginners-guide-to-data-and-analytics.pdf"
        />
        <CategoryCard
          category="Data Science"
          description="Begin your journey in Data Science."
          imagePath="https://manavrachna.edu.in/wp-content/uploads/2022/08/big-data-center-analyzes-data-science-background-presentation-big-data-center-analyzes-data-science-background-159196598.jpg"
          pdfLink="https://srdas.github.io/Papers/DSA_Book.pdf"
        />
      </div>
    </div>
    </div>
  );
};

export default Resources;
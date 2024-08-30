import React, { useEffect } from 'react';
import '../styles/HomePage.css';
import { Link } from 'react-router-dom';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  return (
    <div className="homepage">
      <nav className="navbar">
        <ul>
          <li><Link to="/HomePage">Home</Link></li>
          <li><Link to="/location">Location</Link></li>
          <li><Link to="/review">Review</Link></li>
          <li><Link to="/help">Help</Link></li>
          <li><Link to="/scheme">Schemes</Link></li>
        </ul>
      </nav>
      <div className="content">
        <div className="images-container" data-aos="fade-up">
          <img src="https://cdn.dribbble.com/users/6410352/screenshots/14639983/charging.gif" alt="Image 1" />
          <img src="https://cdn.dribbble.com/users/6705959/screenshots/15582515/media/cd6d9da88f1ec05573215b4adf1fbbf3.gif" alt="Image 2" />
        </div>
        <div className="info-section" data-aos="fade-right">
          <h2>About Our Application</h2>
          <ul>
            <li>Users can perform tasks like eating, writing, and driving without any assistance.</li>
            <li>The piezoelectric battery dramatically increases battery life, enhancing device efficiency and user experience.</li>
            <li>A software application tracks the prosthesis battery, simplifying maintenance for the user.</li>
            <li>Myoelectric prostheses provide a grip force of 20-32 pounds, improving comfort and range of motion.</li>
            <li>Our idea costs just ₹20,000, while other options are priced around ₹5 lakh.</li>
            <li>The prosthetic should be designed to match the size, shape, and contours of the user’s residual limb.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

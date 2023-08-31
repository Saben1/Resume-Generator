import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <main>
      <Header />
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <h2>Welcome to the Resume Generator</h2>
          <p>
            Click the start button below to begin creating your personalized resume.
          </p>
          <Link to="/resume-creation" className="btn btn-lg btn-info m-2">
            Start
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Home;

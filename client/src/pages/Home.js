import React, { useState } from 'react';
import ResumeGenerator from '../components/ResumeGenerator';
import Signup from './Signup'; // Import the Signup component
import Auth from '../utils/auth'; // Import the Auth utility

const Home = () => {
  const [startClicked, setStartClicked] = useState(false);

  const handleStartClick = () => {
    setStartClicked(true);
  };

  const resumeData = {
    title: '',
    objective: '',
    educationData: [],
    experienceData: [],
    skillsData: [],
  };

  return (
    <div>
      {!startClicked ? (
        <div>
          <h1>Welcome to Resume Generator</h1>
          <p>Press the "Start" button to begin creating your resume.</p>
          <button
            className="btn btn-lg btn-info m-2 start-button"
            onClick={handleStartClick}
          >
            Start
          </button>
        </div>
      ) : Auth.loggedIn() ? ( // Check if the user is logged in
        <ResumeGenerator resumeData={resumeData} />
      ) : (
        <Signup /> // Display Signup component if not logged in
      )}
    </div>
  );
};

export default Home;

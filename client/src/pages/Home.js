import React, { useState } from 'react';
import PersonalInformation from '../components/PersonalInformation'; // Updated component name
import Signup from './Signup'; // Import the Signup component
import Auth from '../utils/auth'; // Import the Auth utility

const Home = () => {
  const [startClicked, setStartClicked] = useState(false);
  const [showPersonalInformation, setShowPersonalInformation] = useState(false); // Updated state variable name

  const handleStartClick = () => {
    setStartClicked(true);
    setShowPersonalInformation(true); // Show the Personal Information form when "Start" is clicked
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
      ) : Auth.loggedIn() && showPersonalInformation ? (
        <PersonalInformation />
      ) :  (
        <Signup />
      )}
    </div>
  );
};

export default Home;

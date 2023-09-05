import React, { useState } from 'react';
import Information from '../components/Information'; // Updated component name
import Signup from './Signup'; // Import the Signup component
import Auth from '../utils/auth'; // Import the Auth utility

const Home = () => {
  const [startClicked, setStartClicked] = useState(false);
  const [showInformation, setShowInformation] = useState(false); // Updated state variable name

  const handleStartClick = () => {
    setStartClicked(true);
    setShowInformation(true); // Show the Personal Information form when "Start" is clicked
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
      ) : showInformation ? (
        <Information />
      ) :  (
        <Information />
      )}
    </div>
  );
};

export default Home;

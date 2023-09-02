import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './PersonalInformation.css'; // Import the CSS file

const PersonalInformation = ({ onNext }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({
      ...personalInfo,
      [name]: value,
    });
  };

  const handleNextClick = () => {
    if (personalInfo.firstName && personalInfo.lastName && personalInfo.email && personalInfo.phone) {
      onNext(personalInfo);
      navigate('/generate-resume'); // Use navigate to navigate to the desired route
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div>
      <h3>Personal Information</h3>
      <div className="form-group">
        <label>First Name:</label>
        <input
          type="text"
          className="form-control"
          name="firstName"
          value={personalInfo.firstName}
          onChange={handlePersonalInfoChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Last Name:</label>
        <input
          type="text"
          className="form-control"
          name="lastName"
          value={personalInfo.lastName}
          onChange={handlePersonalInfoChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={personalInfo.email}
          onChange={handlePersonalInfoChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Phone:</label>
        <input
          type="tel"
          className="form-control"
          name="phone"
          value={personalInfo.phone}
          onChange={handlePersonalInfoChange}
          required
        />
      </div>
      <button type="button" className="btn btn-primary" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

const ResumeGenerator = ({ personalInfo }) => {
  return (
    <div>
      <h3>Resume Generator</h3>
      <p>Generated Resume:</p>
      <pre>{JSON.stringify(personalInfo, null, 2)}</pre>
    </div>
  );
};

const Home = () => {
  const [showResumeGenerator, setShowResumeGenerator] = useState(false);
  const [personalInfo, setPersonalInfo] = useState(null);

  const handleNext = (data) => {
    setPersonalInfo(data);
    setShowResumeGenerator(true);
  };

  return (
    <div>
      {showResumeGenerator ? (
        <ResumeGenerator personalInfo={personalInfo} />
      ) : (
        <PersonalInformation onNext={handleNext} />
      )}
    </div>
  );
};

export default Home;

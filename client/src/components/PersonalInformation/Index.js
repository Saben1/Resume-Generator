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
      navigate('/education'); // Use navigate to navigate to the desired route
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
      <div className="form-group">
        <label>Address:</label>
        <input
          type="text"
          className="form-control"
          name="address"
          value={personalInfo.address}
          onChange={handlePersonalInfoChange}
          required
        />
      </div>
      <button className="btn btn-lg btn-info m-2" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default PersonalInformation;

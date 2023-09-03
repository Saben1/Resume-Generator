import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './Experience.css';

const Experience = ({ onNext }) => {
  const navigate = useNavigate();

  const [experienceInfo, setExperienceInfo] = useState({
    company: '',
    position: '',
    startDate: '',
    endDate: '',
  });

  const handleExperienceInfoChange = (e) => {
    const { name, value } = e.target;
    setExperienceInfo({
      ...experienceInfo,
      [name]: value,
    });
  };

  const handleNextClick = () => {
    if (experienceInfo.company && experienceInfo.position && experienceInfo.startDate && experienceInfo.endDate) {
      onNext(experienceInfo); // Pass the experienceInfo to the parent component
      navigate('/skills'); // Navigate to the next step (e.g., Skills)
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div>
      <h3>Experience</h3>
      <div className="form-group">
        <label>Company:</label>
        <input
          type="text"
          className="form-control"
          name="company"
          value={experienceInfo.company}
          onChange={handleExperienceInfoChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Position:</label>
        <input
          type="text"
          className="form-control"
          name="position"
          value={experienceInfo.position}
          onChange={handleExperienceInfoChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Start Date:</label>
        <input
          type="text"
          className="form-control"
          name="startDate"
          value={experienceInfo.startDate}
          onChange={handleExperienceInfoChange}
          required
        />
      </div>
      <div className="form-group">
        <label>End Date:</label>
        <input
          type="text"
          className="form-control"
          name="endDate"
          value={experienceInfo.endDate}
          onChange={handleExperienceInfoChange}
          required
        />
      </div>
      <button className="btn btn-lg btn-info m-2" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default Experience;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Education.css';

const Education = ({ onNext }) => {
  const navigate = useNavigate();

  const [educationInfo, setEducationInfo] = useState({
    degree: '',
    institution: '',
    graduationYear: '',
  });

  const handleEducationInfoChange = (e) => {
    const { name, value } = e.target;
    setEducationInfo({
      ...educationInfo,
      [name]: value,
    });
  };

  const handleNextClick = () => {
    if (educationInfo.degree && educationInfo.institution && educationInfo.graduationYear) {
      onNext(educationInfo); // Pass the educationInfo to the parent component
      navigate('/experience'); // Navigate to the next step (e.g., Experience)
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div>
      <h3>Education</h3>
      <div className="form-group">
        <label>Degree:</label>
        <input
          type="text"
          className="form-control"
          name="degree"
          value={educationInfo.degree}
          onChange={handleEducationInfoChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Institution:</label>
        <input
          type="text"
          className="form-control"
          name="institution"
          value={educationInfo.institution}
          onChange={handleEducationInfoChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Graduation Year:</label>
        <input
          type="number"
          className="form-control"
          name="graduationYear"
          value={educationInfo.graduationYear}
          onChange={handleEducationInfoChange}
          required
        />
      </div>
      <button className="btn btn-lg btn-info m-2" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default Education;

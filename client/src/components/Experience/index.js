import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client'; // Import useMutation
import { CREATE_EXPERIENCE } from '../../utils/mutations'; // Import your GraphQL mutation query

const Experience = () => {
  const navigate = useNavigate();

  const [experienceData, setExperienceData] = useState([
    {
      company: '',
      position: '',
      startDate: '',
      endDate: '',
    },
  ]);

  const [createExperience] = useMutation(CREATE_EXPERIENCE); // Initialize the mutation

  const handleAddExperience = () => {
    setExperienceData([
      ...experienceData,
      { company: '', position: '', startDate: '', endDate: '', description: '' },
    ]);
  };

  const handleRemoveExperience = (index) => {
    const updatedExperienceData = [...experienceData];
    updatedExperienceData.splice(index, 1);
    setExperienceData(updatedExperienceData);
  };

  const handleExperienceChange = (e, index) => {
    const { name, value } = e.target;
    const updatedExperienceData = [...experienceData];
    updatedExperienceData[index][name] = value;
    setExperienceData(updatedExperienceData);
  };

  const handleNextClick = async () => {
    try {
      // Call the mutation to save experience information
      const { data } = await createExperience({
        variables: { input: { experience: experienceData } }, // Pass the experience data as an array
      });

      if (data.createExperience) {
        navigate('/skills'); // Navigate to the Skills component
      } else {
        alert('Failed to save experience information. Please try again.');
      }
    } catch (error) {
      console.error('Error saving experience information:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <h3>Experience</h3>
      {experienceData.map((experience, index) => (
        <div key={index}>
          <div className="form-group">
            <label>Company:</label>
            <input
              type="text"
              className="form-control"
              name="company"
              value={experience.company}
              onChange={(e) => handleExperienceChange(e, index)}
              required
            />
          </div>
          <div className="form-group">
            <label>Position:</label>
            <input
              type="text"
              className="form-control"
              name="position"
              value={experience.position}
              onChange={(e) => handleExperienceChange(e, index)}
              required
            />
          </div>
          <div className="form-group">
            <label>Start Date:</label>
            <input
              type="text"
              className="form-control"
              name="startDate"
              value={experience.startDate}
              onChange={(e) => handleExperienceChange(e, index)}
              required
            />
          </div>
          <div className="form-group">
            <label>End Date:</label>
            <input
              type="text"
              className="form-control"
              name="endDate"
              value={experience.endDate}
              onChange={(e) => handleExperienceChange(e, index)}
            />
          </div>
          <button
            className="btn btn-danger"
            onClick={() => handleRemoveExperience(index)}
          >
            Remove
          </button>
        </div>
      ))}
      <button className="btn btn-secondary mb-3" onClick={handleAddExperience}>
        Add Experience
      </button>
      <button className="btn btn-lg btn-info" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default Experience;


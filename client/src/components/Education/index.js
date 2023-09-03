import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client'; // Import useMutation
import { CREATE_EDUCATION } from '../../utils/mutations'; // Import your GraphQL mutation query

const Education = () => {
  const navigate = useNavigate();

  const [educationData, setEducationData] = useState([
    {
      institution: '',
      degree: '',
      startDate: '',
      endDate: '',
    },
  ]);

  const [createEducation] = useMutation(CREATE_EDUCATION); // Initialize the mutation

  const handleAddEducation = () => {
    setEducationData([
      ...educationData,
      { institution: '', degree: '', startDate: '', endDate: '' },
    ]);
  };

  const handleRemoveEducation = (index) => {
    const updatedEducationData = [...educationData];
    updatedEducationData.splice(index, 1);
    setEducationData(updatedEducationData);
  };

  const handleEducationChange = (e, index) => {
    const { name, value } = e.target;
    const updatedEducationData = [...educationData];
    updatedEducationData[index][name] = value;
    setEducationData(updatedEducationData);
  };

  const handleNextClick = async () => {
    try {
      // Call the mutation to save education information
      const { data } = await createEducation({
        variables: { input: { education: educationData } }, // Pass the education data as an array
      });

      if (data.createEducation) {
        navigate('/experience'); // Navigate to the Experience component
      } else {
        alert('Failed to save education information. Please try again.');
      }
    } catch (error) {
      console.error('Error saving education information:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <h3>Education</h3>
      {educationData.map((education, index) => (
        <div key={index}>
          <div className="form-group">
            <label>Institution:</label>
            <input
              type="text"
              className="form-control"
              name="institution"
              value={education.institution}
              onChange={(e) => handleEducationChange(e, index)}
              required
            />
          </div>
          <div className="form-group">
            <label>Degree:</label>
            <input
              type="text"
              className="form-control"
              name="degree"
              value={education.degree}
              onChange={(e) => handleEducationChange(e, index)}
              required
            />
          </div>
          <div className="form-group">
            <label>Start Date:</label>
            <input
              type="text"
              className="form-control"
              name="startDate"
              value={education.startDate}
              onChange={(e) => handleEducationChange(e, index)}
              required
            />
          </div>
          <div className="form-group">
            <label>End Date:</label>
            <input
              type="text"
              className="form-control"
              name="endDate"
              value={education.endDate}
              onChange={(e) => handleEducationChange(e, index)}
            />
          </div>
          <button
            className="btn btn-danger"
            onClick={() => handleRemoveEducation(index)}
          >
            Remove
          </button>
        </div>
      ))}
      <button className="btn btn-secondary mb-3" onClick={handleAddEducation}>
        Add Education
      </button>
      <button className="btn btn-lg btn-info" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default Education;

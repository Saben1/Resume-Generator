import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client'; // Import useMutation
import { CREATE_EXPERIENCE } from '../../utils/mutations'; // Import your GraphQL mutation query

const Experience = () => {
  const navigate = useNavigate();

  const [experience, setExperience] = useState({
      company: '',
      position: '',
      startDate: '',
      endDate: '',
    });

  const [createExperience] = useMutation(CREATE_EXPERIENCE); // Initialize the mutation
  const handleExperienceChange = (e) => {
    const { name, value } = e.target;
    setExperience({
      ...experience,
      [name]: value,
    });

  };

  const handleNextClick = async (event) => {
    event.preventDefault();
    const { data } = await createExperience(
      {
        variables: { ...experience}
      }
    );
    console.log(data);
    console.log("data aayo");
    navigate('/skills');
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
          value={experience.company}
          onChange={handleExperienceChange}
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
          onChange={handleExperienceChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Startdate:</label>
        <input
          type="text"
          className="form-control"
          name="startDate"
          value={experience.startDate}
          onChange={handleExperienceChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Enddate:</label>
        <input
          type="text"
          className="form-control"
          name="endDate"
          value={experience.endDate}
          onChange={handleExperienceChange}
          required
        />
      </div>
      <button
        className="btn btn-lg btn-info m-2"
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  );
};

export default Experience;
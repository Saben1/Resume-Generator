import React, { useState } from 'react';
import { useMutation } from '@apollo/client'; // Import useMutation
import { Link, useNavigate } from 'react-router-dom';
import { CREATE_EDUCATION } from '../../utils/mutations'; // Import your GraphQL mutation query

const Education = () => {
  const navigate = useNavigate();

  const [education, setEducation] = useState({
    institution: '',
      degree: '',
      startDate: '',
      endDate: '',
  });

    const [createEducation, {error, data }] = useMutation(CREATE_EDUCATION); // Initialize the mutation

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setEducation({
      ...education,
      [name]: value,
    });

  };

  const handleNextClick = async (event) => {
    event.preventDefault();
    const { data } = await createEducation(
      {
        variables: { ...education}
      }
    );
    console.log(data);
    console.log("data aayo");
    navigate('/experience');
  };

  return (
    <div>
      <h3>Education</h3>
      <div className="form-group">
        <label>Institution:</label>
        <input
          type="text"
          className="form-control"
          name="institution"
          value={education.institution}
          onChange={handleEducationChange}
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
          onChange={handleEducationChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Startdate:</label>
        <input
          type="text"
          className="form-control"
          name="startDate"
          value={education.startDate}
          onChange={handleEducationChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Enddate:</label>
        <input
          type="text"
          className="form-control"
          name="endDate"
          value={education.endDate}
          onChange={handleEducationChange}
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

export default Education;
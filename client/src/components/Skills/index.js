import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client'; // Import useMutation
import { CREATE_SKILLS } from '../../utils/mutations'; // Import your GraphQL mutation query

const Skills = () => {
  const navigate = useNavigate();

  const [skills, setSkills] = useState({
    skill:'',
  });

  const [createSkills, {error, data }] = useMutation(CREATE_SKILLS); // Initialize the mutation

  const handleSkillsChange = (e) => {
    const { name, value } = e.target;
    setSkills({
      ...skills,
      [name]: value,
    });

  };

  const handleNextClick = async (event) => {
    event.preventDefault();
    const { data } = await createSkills(
      {
        variables: { ...skills}
      }
    );
    console.log(data);
    console.log("data aayo");
    navigate('/preview');
  };

  return (
    <div>
      <h3>Skills</h3>
      <div className="form-group">
        <label>Skill:</label>
        <input
          type="text"
          className="form-control"
          name="skill"
          value={Skills.skill}
          onChange={handleSkillsChange}
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

export default Skills;
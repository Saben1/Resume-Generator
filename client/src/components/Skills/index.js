import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client'; // Import useMutation
import { CREATE_SKILLS } from '../../utils/mutations'; // Import your GraphQL mutation query
import './Skills.css'; // Import your CSS file

const Skills = () => {
  const navigate = useNavigate();

  const [skills, setSkills] = useState([]);
  const [createSkills] = useMutation(CREATE_SKILLS); // Initialize the mutation

  const handleAddSkill = () => {
    setSkills([...skills, '']);
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  const handleSkillChange = (e, index) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = e.target.value;
    setSkills(updatedSkills);
  };

  const handleNextClick = async () => {
    try {
      // Call the mutation to save skills information
      const { data } = await createSkills({
        variables: { input: { skills } }, // Pass the skills data as an array
      });

      if (data.createSkills) {
        navigate('/previewresume'); // Navigate to the PreviewResume component
      } else {
        alert('Failed to save skills information. Please try again.');
      }
    } catch (error) {
      console.error('Error saving skills information:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <h3>Skills</h3>
      {skills.map((skill, index) => (
        <div key={index} className="form-group">
          <label>Skill:</label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={skill}
              onChange={(e) => handleSkillChange(e, index)}
              required
            />
            <div className="input-group-append">
              <button
                className="btn btn-danger"
                type="button"
                onClick={() => handleRemoveSkill(index)}
              >
                Remove Skill
              </button>
            </div>
          </div>
        </div>
      ))}
      <button className="btn btn-secondary mb-3" onClick={handleAddSkill}>
        Add Skill
      </button>
      <div>
        <button className="btn btn-info mr-2" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Skills;

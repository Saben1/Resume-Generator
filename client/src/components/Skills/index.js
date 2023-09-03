import React, { useState } from 'react';
// import './Skills.css';

const Skills = ({ onNext }) => {
  const [skills, setSkills] = useState(['']);

  const handleSkillChange = (e, index) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = e.target.value;
    setSkills(updatedSkills);
  };

  const handleNextClick = () => {
    if (skills.every((skill) => skill.trim())) {
      onNext(skills); // Pass the skills to the parent component
    } else {
      alert('Please fill in all fields.');
    }
  };

  const addSkill = () => {
    setSkills([...skills, '']);
  };

  const removeSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  return (
    <div>
      <h3>Skills</h3>
      {skills.map((skill, index) => (
        <div key={index}>
          <input
            type="text"
            className="form-control"
            name="skills"
            value={skill}
            onChange={(e) => handleSkillChange(e, index)}
            placeholder="Skill"
            required
          />
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => removeSkill(index)}
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        className="btn btn-success"
        onClick={addSkill}
      >
        Add Skill
      </button>
      <button className="btn btn-lg btn-info m-2" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default Skills;

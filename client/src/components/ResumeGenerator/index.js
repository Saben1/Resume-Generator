import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_RESUME } from '../../utils/mutations';
import './ResumeGenerator.css'; // Import the CSS file

const ResumeGenerator = () => {
  const [formData, setFormData] = useState({
    title: '',
    education: [],
    experience: [],
    skills: [],
  });

  const [isSaved, setIsSaved] = useState(false);
  const [isViewed, setIsViewed] = useState(false);

  const { title, education, experience, skills } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [...education, {}],
    });
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      experience: [...experience, {}],
    });
  };

  const handleEducationChange = (e, index) => {
    const { name, value } = e.target;
    const updatedEducation = [...education];
    updatedEducation[index][name] = value;
    setFormData({
      ...formData,
      education: updatedEducation,
    });
  };

  const handleExperienceChange = (e, index) => {
    const { name, value } = e.target;
    const updatedExperience = [...experience];
    updatedExperience[index][name] = value;
    setFormData({
      ...formData,
      experience: updatedExperience,
    });
  };

  const removeEducation = (index) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    setFormData({
      ...formData,
      education: updatedEducation,
    });
  };

  const removeExperience = (index) => {
    const updatedExperience = [...experience];
    updatedExperience.splice(index, 1);
    setFormData({
      ...formData,
      experience: updatedExperience,
    });
  };

  const handleSkillChange = (e, index) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = e.target.value;
    setFormData({
      ...formData,
      skills: updatedSkills,
    });
  };

  const addSkill = () => {
    setFormData({
      ...formData,
      skills: [...skills, ''],
    });
  };

  const removeSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setFormData({
      ...formData,
      skills: updatedSkills,
    });
  };

  const [createResume, { error }] = useMutation(CREATE_RESUME);

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      const { data } = await createResume({
        variables: {
          title,
          education,
          experience,
          skills,
        },
      });

      console.log('New Resume Created:', data.createResume);

      setIsSaved(true);
    } catch (err) {
      console.error('Error creating resume:', err);
    }
  };

  const handleView = () => {
    setIsViewed(true);
  };

  return (
    <div className="container resume-generator">
      <h2>Create Your Resume</h2>
      <form onSubmit={handleSave}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={title}
            onChange={handleChange}
            required
          />
        </div>
        <h3>Education</h3>
        {education.map((edu, index) => (
          <div key={index}>
            <label>Institution:</label>
            <input
              type="text"
              className="form-control"
              name="institution"
              value={edu.institution || ''}
              onChange={(e) => handleEducationChange(e, index)}
              required
            />
            <label>Degree:</label>
            <input
              type="text"
              className="form-control"
              name="degree"
              value={edu.degree || ''}
              onChange={(e) => handleEducationChange(e, index)}
            />
            <label>Start Date:</label>
            <input
              type="text"
              className="form-control"
              name="startDate"
              value={edu.startDate || ''}
              onChange={(e) => handleEducationChange(e, index)}
            />
            <label>End Date:</label>
            <input
              type="text"
              className="form-control"
              name="endDate"
              value={edu.endDate || ''}
              onChange={(e) => handleEducationChange(e, index)}
            />
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => removeEducation(index)}
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          className="btn btn-success"
          onClick={addEducation}
        >
          Add Education
        </button>
        <h3>Experience</h3>
        {experience.map((exp, index) => (
          <div key={index}>
            <label>Company:</label>
            <input
              type="text"
              className="form-control"
              name="company"
              value={exp.company || ''}
              onChange={(e) => handleExperienceChange(e, index)}
              required
            />
            <label>Position:</label>
            <input
              type="text"
              className="form-control"
              name="position"
              value={exp.position || ''}
              onChange={(e) => handleExperienceChange(e, index)}
            />
            <label>Start Date:</label>
            <input
              type="text"
              className="form-control"
              name="startDate"
              value={exp.startDate || ''}
              onChange={(e) => handleExperienceChange(e, index)}
            />
            <label>End Date:</label>
            <input
              type="text"
              className="form-control"
              name="endDate"
              value={exp.endDate || ''}
              onChange={(e) => handleExperienceChange(e, index)}
            />
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => removeExperience(index)}
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          className="btn btn-success"
          onClick={addExperience}
        >
          Add Experience
        </button>
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
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Save Resume
          </button>
        </div>
      </form>
      {isSaved && (
        <div className="alert alert-success" role="alert">
          Resume saved successfully!
        </div>
      )}
      {isViewed && (
        <div className="alert alert-info" role="alert">
          Resume viewed!
        </div>
      )}
      {error && (
        <div className="alert alert-danger" role="alert">
          Error: {error.message}
        </div>
      )}
      <button
        type="button"
        className="btn btn-info"
        onClick={handleView}
      >
        View Resume
      </button>
    </div>
  );
};

export default ResumeGenerator;

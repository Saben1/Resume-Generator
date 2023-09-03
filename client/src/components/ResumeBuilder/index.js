import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const ResumeBuilder = () => {
  const history = useHistory();

  // Initialize user data state
  const [userData, setUserData] = useState({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
    educationInfo: [],
    skillsInfo: [],
    workExperienceInfo: [],
  });

  // Function to handle changes in personal info
  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      personalInfo: {
        ...prevData.personalInfo,
        [name]: value,
      },
    }));
  };

  // Function to add education entry
  const addEducationEntry = () => {
    setUserData((prevData) => ({
      ...prevData,
      educationInfo: [...prevData.educationInfo, {}],
    }));
  };

  // Function to add skill entry
  const addSkillEntry = () => {
    setUserData((prevData) => ({
      ...prevData,
      skillsInfo: [...prevData.skillsInfo, ''],
    }));
  };

  // Function to add work experience entry
  const addWorkExperienceEntry = () => {
    setUserData((prevData) => ({
      ...prevData,
      workExperienceInfo: [...prevData.workExperienceInfo, {}],
    }));
  };

  // Function to preview the resume and navigate to the PreviewResume page
  const previewResume = () => {
    history.push('/previewresume', { userData });
  };

  return (
    <div>
      <h2>Resume Builder</h2>
      <h3>Personal Information</h3>
      <div className="form-group">
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={userData.personalInfo.firstName}
          onChange={handlePersonalInfoChange}
        />
      </div>
      {/* Add more personal info fields here (lastName, email, phone, etc.) */}
      <h3>Education</h3>
      <button onClick={addEducationEntry}>Add Education</button>
      {userData.educationInfo.map((entry, index) => (
        <div key={index}>
          {/* Education entry fields */}
        </div>
      ))}
      {/* Similar sections for skills and work experience */}
      <h3>Skills</h3>
      <button onClick={addSkillEntry}>Add Skill</button>
      {userData.skillsInfo.map((skill, index) => (
        <div key={index}>
          {/* Skill entry fields */}
        </div>
      ))}
      <h3>Work Experience</h3>
      <button onClick={addWorkExperienceEntry}>Add Work Experience</button>
      {userData.workExperienceInfo.map((entry, index) => (
        <div key={index}>
          {/* Work experience entry fields */}
        </div>
      ))}
      <button onClick={previewResume}>Preview Resume</button>
    </div>
  );
};

export default ResumeBuilder;

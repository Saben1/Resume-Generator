import React from 'react';

function ResumePreview({ personalDetails, education, experience, skills }) {
  return (
    <div>
      <h2>Resume Preview</h2>
      <div>
        <h3>Personal Details</h3>
        <p>First Name: {personalDetails.firstName}</p>
        <p>Last Name: {personalDetails.lastName}</p>
        <p>Email: {personalDetails.email}</p>
      </div>
      <div>
        <h3>Education</h3>
        <p>{education.school}</p>
        <p>{education.degree}</p>
        <p>{education.graduationYear}</p>
      </div>
      <div>
        <h3>Experience</h3>
        <p>{experience.companyName}</p>
        <p>{experience.jobTitle}</p>
        <p>{experience.yearsWorked}</p>
      </div>
      <div>
        <h3>Skills</h3>
        <p>{skills}</p>
      </div>
    </div>
  );
}

export default ResumePreview;

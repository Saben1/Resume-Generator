import React, { useState } from 'react';

function FormExperience({ onNext }) {
  const [experience, setExperience] = useState({
    companyName: '',
    jobTitle: '',
    yearsWorked: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setExperience((prevExperience) => ({
      ...prevExperience,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the experience data, e.g., send to backend
    onNext(); // Call the provided onNext function to move to the next step
  };

  return (
    <div>
      <h2>Work Experience</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="companyName">Company Name:</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={experience.companyName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="jobTitle">Job Title:</label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={experience.jobTitle}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="yearsWorked">Years Worked:</label>
          <input
            type="text"
            id="yearsWorked"
            name="yearsWorked"
            value={experience.yearsWorked}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default FormExperience;

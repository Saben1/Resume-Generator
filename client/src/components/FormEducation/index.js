import React, { useState } from 'react';

function FormEducation({ onNext }) {
  const [education, setEducation] = useState({
    school: '',
    degree: '',
    graduationYear: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEducation((prevEducation) => ({
      ...prevEducation,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the education data, e.g., send to backend
    onNext(); // Call the provided onNext function to move to the next step
  };

  return (
    <div>
      <h2>Education Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="school">School:</label>
          <input
            type="text"
            id="school"
            name="school"
            value={education.school}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="degree">Degree:</label>
          <input
            type="text"
            id="degree"
            name="degree"
            value={education.degree}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="graduationYear">Graduation Year:</label>
          <input
            type="text"
            id="graduationYear"
            name="graduationYear"
            value={education.graduationYear}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default FormEducation;

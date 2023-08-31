import React, { useState } from 'react';

function FormPersonalDetails({ onNext }) {
  const [personalDetails, setPersonalDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPersonalDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the personal details data, e.g., send to backend
    onNext(); // Call the provided onNext function to move to the next step
  };

  return (
    <div>
      <h2>Personal Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={personalDetails.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={personalDetails.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={personalDetails.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default FormPersonalDetails;

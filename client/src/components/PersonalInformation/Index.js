import React, { useState } from 'react';
import { useMutation } from '@apollo/client'; // Import useMutation
import { Link, useNavigate } from 'react-router-dom';
import { CREATE_PERSONALINFO } from '../../utils/mutations'; // Import your GraphQL mutation query

const PersonalInformation = () => {
  const navigate = useNavigate();

  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  });

  const [createResume] = useMutation(CREATE_PERSONALINFO); // Initialize the mutation

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({
      ...personalInfo,
      [name]: value,
    });
  };

  const handleNextClick = async () => {
    if (
      personalInfo.firstName &&
      personalInfo.lastName &&
      personalInfo.email &&
      personalInfo.phone &&
      personalInfo.address
    ) {
      try {
        // Call the mutation to save the user's personal information
        const { data } = await createResume({
          variables: { input: personalInfo },
        });

        // Check the response from the mutation for success
        if (data.createResume) {
          // Redirect to the next step or a success page
          navigate('/education');
        } else {
          alert('Failed to save personal information. Please try again.');
        }
      } catch (error) {
        console.error('Error saving personal information:', error);
        alert('An error occurred. Please try again later.');
      }
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div>
      <h3>Personal Information</h3>
      <div className="form-group">
        <label>First Name:</label>
        <input
          type="text"
          className="form-control"
          name="firstName"
          value={personalInfo.firstName}
          onChange={handlePersonalInfoChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Last Name:</label>
        <input
          type="text"
          className="form-control"
          name="lastName"
          value={personalInfo.lastName}
          onChange={handlePersonalInfoChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={personalInfo.email}
          onChange={handlePersonalInfoChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Phone:</label>
        <input
          type="tel"
          className="form-control"
          name="phone"
          value={personalInfo.phone}
          onChange={handlePersonalInfoChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Address:</label>
        <input
          type="text"
          className="form-control"
          name="address"
          value={personalInfo.address}
          onChange={handlePersonalInfoChange}
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

export default PersonalInformation;

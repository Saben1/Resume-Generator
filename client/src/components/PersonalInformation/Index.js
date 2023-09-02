import React from 'react';

const PersonalInformation = ({ name, email, phoneNumber }) => {
  return (
    <div>
      <h2>Personal Information</h2>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Phone Number:</strong> {phoneNumber}
      </p>
    </div>
  );
};

export default PersonalInformation;

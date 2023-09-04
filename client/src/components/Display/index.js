// src/components/Resume.js
import React from 'react';
import resumeData from '../../resumeData';
import PersonalInformation from '../PersonalInformation';
import Education from '../Education';

const Display = () => {
  return (
    <div>
      <h2>Resume Preview</h2>
      <div className="resume-section">
      <div>
      <h3>Personal Information</h3>
      <div className="form-group">
        <label>First Name:</label>
        <input
          type="text"
          className="form-control"
          name="firstName"
          value="Sabin"
        
        />
      </div>
      <div className="form-group">
        <label>Last Name:</label>
        <input
          type="text"
          className="form-control"
          name="lastName"
          value="Budhathoki"
         
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value="budhathokisabin@gmail.com"
         
        />
      </div>
      <div className="form-group">
        <label>Phone:</label>
        <input
          type="tel"
          className="form-control"
          name="phone"
          value="123456"
        
        />
      </div>
      <div className="form-group">
        <label>Address:</label>
        <input
          type="text"
          className="form-control"
          name="address"
          value="perth"
        
        />
      </div>

    </div>
      </div>
      <div className="resume-section">
      <div>
      <h3>Education</h3>
   
      
          <div className="form-group">
            <label>Institution:</label>
            <input
              type="text"
              className="form-control"
              name="institution"
              value="UWA"
              
            />
          </div>
          <div className="form-group">
            <label>Degree:</label>
            <input
              type="text"
              className="form-control"
              name="degree"
              value="Masters in Technology"
             
            />
          </div>
          <div className="form-group">
            <label>Start Date:</label>
            <input
              type="text"
              className="form-control"
              name="startDate"
              value="2010"
            
            />
          </div>
          <div className="form-group">
            <label>End Date:</label>
            <input
              type="text"
              className="form-control"
              name="endDate"
              value="2012"
             
            />
          </div>
   
      
     
    </div>
      </div>
      <button className="btn btn-lg btn-light m-2">
               save
              </button>
    </div>
  );
};

export default Display;

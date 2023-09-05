import React, { Component } from 'react';
import Education from '../Education';
import Information from '../Information';
import Experience from '../Experience';
import Skills from '../Skills';
import './Preview.css'

class ResumePreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      educationData: '',
      InformationData: '',
      experienceData: '',
      skillsData: '',
    };
  }

  handleEducationDataChange = (data) => {
    this.setState({ educationData: data });
  }

  handlePersonalinfoDataChange = (data) => {
    this.setState({ personalinfoData: data });
  }

  handleExperienceDataChange = (data) => {
    this.setState({ experienceData: data });
  }

  handleSkillsDataChange = (data) => {
    this.setState({ skillsData: data });
  }

  render() {
    return (
      <div className="resume-container">
        <h1> Resume Preview</h1>
      <div className="content-container">

        <div>
          <h3><strong>Personal Info:</strong></h3>
          <p>Name:</p>
          <p>email:</p>
          <p>Phone:</p>
          <p>Address:</p>
        </div>

        <div>
          <h3><strong>Education:</strong></h3>
          <p>Institution:</p>
          <p>Degree:</p>
          <p>Srart Date:</p>
          <p>End Date:</p>
        </div>

        <div>
          <h3><strong>Experience:</strong></h3>
          <p>Company:</p>
          <p>Start Date:</p>
          <p>End Date:</p>
          <p>Description:</p>
        </div>

        <div>
          <h3><strong>Skills:</strong></h3>
          <p>Skills:</p>
        </div>
        </div>

        <button className=" btn btn-sm btn-info">
                Save
        </button>
      </div>
    );
  }
}

export default ResumePreview;

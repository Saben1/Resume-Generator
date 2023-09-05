import React, { Component } from 'react';
import Education from '../Education';
import Information from '../Information';
import Experience from '../Experience';
import Skills from '../Skills';
import { GET_INFORMATION, GET_SKILLS } from '../../utils/queries';
import { GET_EDUCATION } from '../../utils/queries';
import { GET_EXPERIENCE } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import './Preview.css'


const ResumePreview = () => {

  // handleEducationDataChange = (data) => {
  //   this.setState({ educationData: data });
  // }

  // handlePersonalinfoDataChange = (data) => {
  //   this.setState({ personalinfoData: data });
  // }

  // handleExperienceDataChange = (data) => {
  //   this.setState({ experienceData: data });
  // }

  // handleSkillsDataChange = (data) => {
  //   this.setState({ skillsData: data });
  // }

 

  const {data: informationdata, loading: informationloading, error: informationerror,} = useQuery(GET_INFORMATION);
  const {data: educationdata, loading: educationloading, error: educationerror} = useQuery(GET_EDUCATION);
  const {data: experiencedata, loading: experienceloading, error: experienceerror} = useQuery(GET_EXPERIENCE);
  const {data: skillsdata, loading: skillsloading, error: skillserror} = useQuery(GET_SKILLS);

  if (informationloading || educationloading || experienceloading || skillsloading ) return 'Loading...';
  if (informationerror || educationerror || experienceerror|| skillserror ) return 'Error!'; 

  const { information } = informationdata;
  const { education } = educationdata;
  const { experience } = experiencedata;
  const { skills } = skillsdata;

  return(

    <div className="resume-container">
    <h1> Resume Preview</h1>
    <div className="content-container">

       <div>
          <h3><strong>Personal Info:</strong></h3>
          <p>Name: {information.firstName} {information.lastName}</p>
          <p>email: {information.email}</p>
          <p>Phone: {information.phone}</p>
          <p>Address: {information.address}</p>
        </div>

        <div>
          <h3><strong>Education:</strong></h3>
          <p>Institution: {education.institution}</p>
          <p>Degree: {education.degree}</p>
          <p>Start Date: {education.startDate}</p>
          <p>End Date: {education.endDate}</p>
        </div>

        <div>
          <h3><strong>Experience:</strong></h3>
          <p>Company: {experience.company}</p>
          <p>Position: {experience.position}</p>
          <p>Start Date: {experience.startDate}</p>
          <p>End Date: {experience.endDate}</p>
        </div>

        <div>
          <h3><strong>Skills:</strong></h3>
          <p>Skill: {skills.skill}</p>
        </div>

        </div>
      </div>
  );
  }
// }

export default ResumePreview;

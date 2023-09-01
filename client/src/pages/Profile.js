import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_USER_BY_USERNAME } from '../utils/queries';

const Profile = () => {
  const { username } = useParams();

  const { loading, error, data } = useQuery(GET_USER_BY_USERNAME, {
    variables: { username },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const { user } = data;

  return (
    <div>
      <h1>User Profile: {user.username}</h1>
      <h2>Email: {user.email}</h2>
      <h2>Resume</h2>
      <p>Title: {user.resume.title}</p>
      <p>Objective: {user.resume.objective}</p>
      <h3>Education</h3>
      <ul>
        {user.resume.education.map((edu) => (
          <li key={edu._id}>
            {edu.institution} - {edu.degree}
          </li>
        ))}
      </ul>
      <h3>Experience</h3>
      <ul>
        {user.resume.experience.map((exp) => (
          <li key={exp._id}>
            {exp.company} - {exp.position}
          </li>
        ))}
      </ul>
      <h3>Skills</h3>
      <ul>
        {user.resume.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;

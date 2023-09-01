import React from 'react';
import { useQuery } from '@apollo/client';
import ResumeGenerator from '../components/ResumeGenerator';
import { GET_MY_RESUME } from '../utils/queries'; // Import the query you want to use

const Home = () => {
  // Use the useQuery hook to fetch data
  const { loading, error, data } = useQuery(GET_MY_RESUME);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const resumeData = data?.myResume || null; // Replace myResume with the actual field name in your query

  return (
    <div>
      {/* Pass the resume data to the ResumeGenerator component */}
      <ResumeGenerator resumeData={resumeData} />
    </div>
  );
};

export default Home;

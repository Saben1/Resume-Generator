import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom'; // Import Navigate
import { useQuery } from '@apollo/client';

import { GET_USER_BY_USERNAME, GET_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? GET_USER_BY_USERNAME : GET_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  // Redirect to the login page if not logged in
  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />; // Use Navigate here
  }

  // Redirect to the user's profile if the logged-in user matches the requested user
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />; // Use Navigate here
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Welcome to {userParam ? `${user.username}'s` : 'your'} profile.
        </h2>
      </div>
      {/* Add a Resumes button that links to the user's resumes */}
      <div className="flex-row justify-center">
        <Link to={`/user/${userParam}/resumes`} className="btn btn-lg btn-info m-2" to="/my-resumes">
                My Resumes
        </Link>
      </div>
    </div>
  );
};

export default Profile;

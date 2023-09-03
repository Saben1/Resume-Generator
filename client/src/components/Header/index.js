import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-dark text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light text-decoration-none" to="/Home">
            {/* Wrap the "Resume Generator" header in a Link */}
            <h1 className="m-0">Resume Generator</h1>
          </Link>
          <p className="m-0">Elevate Your Professional Profile with Expertly Crafted Resumes <br />– Your Perfect Resume Awaits!</p> 
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s Profile
              </Link>
              <Link className="btn btn-lg btn-info m-2" to="/my-resumes">
                My Resumes
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/signup">
                Signup
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/login">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
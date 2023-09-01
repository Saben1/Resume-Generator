import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Login from '../pages/Login'; // Update the path accordingly
import Signup from '../pages/Signup'; // Update the path accordingly

const AuthPage = () => {
  return (
    <main>
      <Header />
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <Login />
          <p>or</p>
          <Signup />
          <p>
            Already have an account?{' '}
            <Link to="/login">Log in here</Link>
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default AuthPage;

import React from 'react';

const Home = () => {
  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <h2>Welcome to the Resume Generator</h2>
          <p>
            Click the start button below to begin creating your personalized resume.
          </p>
          <button className="btn btn-lg btn-info m-2">Start</button>
        </div>
      </div>
    </main>
  );
};

export default Home;

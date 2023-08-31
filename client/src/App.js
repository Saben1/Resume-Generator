import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import AuthPage from './pages/AuthPage';
import Profile from './pages/Profile';
import StartButton from './components/StartButton'; // Import other components as needed

function App() {
  return (
    <Router>
      <div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/start" element={<StartButton />} />
          {/* Add more routes for other pages and components */}
        </Routes>

      </div>
    </Router>
  );
}

export default App;

import React from 'react';

function StartButton({ onClick }) {
  return (
    <button onClick={onClick} className="btn btn-primary">
      Start
    </button>
  );
}

export default StartButton;

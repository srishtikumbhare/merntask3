// src/AgeCalculator.js
import React, { useState } from 'react';
import './AgeCalculator.css';

function AgeCalculator() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthdateDate = new Date(birthdate);
    const currentDate = new Date();
    const ageDiff = currentDate - birthdateDate;
    const ageDate = new Date(ageDiff);

    setAge(Math.abs(ageDate.getUTCFullYear() - 1970));
  };

  return (
    <div className="age-calculator">
      <h2>Date of Birth</h2>
      <input
        type="date"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      />
      <button className="calculate-button" onClick={calculateAge}>
        Calculate
      </button>
      {age !== null && (
        <p>Your age is {age} years old.</p>
      )}
    </div>
  );
}

export default AgeCalculator;

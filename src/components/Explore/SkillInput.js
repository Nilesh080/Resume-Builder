import React, { useState } from "react";
import "./input.css";
const SkillInput = ({ onSkillsChange }) => {
  const [skills, setSkills] = useState("");
  const handleInputChange = (e) => {
    setSkills(e.target.value);
  };

  const handleSubmit = () => {
    onSkillsChange(skills);
  };

  return (
    <div>
      <h2>Enter Your Skills</h2>
      <textarea
        rows="4"
        cols="50"
        value={skills}
        onChange={handleInputChange}
        placeholder="Enter your skills separated by commas"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SkillInput;

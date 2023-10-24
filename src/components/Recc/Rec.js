import "./Rec.css";
import React, { useState } from "react";
import jobRolesData from "./jobRolesData";

function Rec() {
  const [selectedJobRole, setSelectedJobRole] = useState("");
  const [recommendedSkills, setRecommendedSkills] = useState([]);

  const handleSearch = () => {
    // Convert the selected job role to lowercase
    const selectedRoleLowercase = selectedJobRole.toLowerCase();

    // Find the selected job role in the data (case-insensitive)
    const selectedRoleData = jobRolesData.find(
      (roleData) => roleData.role.toLowerCase() === selectedRoleLowercase
    );

    if (selectedRoleData) {
      setRecommendedSkills(selectedRoleData.skills);
    } else {
      setRecommendedSkills([]);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Resume Skill Recommendation</h1>
      <div className="form-group">
        <label htmlFor="jobRole">Search for a job role:</label>
        <input
          type="text"
          id="jobRole"
          className="form-control"
          value={selectedJobRole}
          onChange={(e) => setSelectedJobRole(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
      <div className="mt-4">
        <h2>Recommended Skills for {selectedJobRole}:</h2>
        <ul className="list-group">
          {recommendedSkills.map((skill, index) => (
            <li key={index} className="list-group-item">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Rec;

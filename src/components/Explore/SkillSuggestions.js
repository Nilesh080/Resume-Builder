import React from "react";
import "./OutlinedDiv.css";
import { useState } from "react";

const SkillSuggestions = ({ skills }) => {
  // A very basic set of predefined job roles and their required skills
  const [roleSkills, setRoleSkills] = useState([]);
  const jobRoles = [
    { role: "Web Developer", skills: ["HTML", "CSS", "JavaScript", "React"] },
    { role: "Data Analyst", skills: ["SQL", "Excel", "Data Analysis"] },
    {
      role: "Graphic Designer",
      skills: ["Adobe Photoshop", "Illustrator", "UI/UX"]
    },
    { role: "Software Engineer", skills: ["Java", "Python", "Data Structures"] }
  ];

  // Split the user-entered skills and create an array of skill strings
  const userSkills = skills.split(",").map((skill) => skill.trim());

  // Find job roles that match the user's skills
  const suggestedRoles = jobRoles.filter((role) =>
    userSkills.every((skill) => role.skills.includes(skill))
  );

  // Extract suggested job roles
  const suggestedJobRoles = suggestedRoles.map((role) => role.role);

  // Recommended skills and courses based on the job role
  const recommendedSkills =
    suggestedRoles.length > 0 ? suggestedRoles[0].skills : [];
  const recommendedCourses =
    {
      "Web Developer": [
        {
          name: "Web Development Fundamentals",
          link:
            "https://developer.mozilla.org/en-US/docs/Web/Guide/Introduction_to_Web_development"
        },
        {
          name: "NodeJS Mastery Course",
          link:
            "https://www.simplilearn.com/nodejs-for-beginners-article#:~:text=js%3F-,Node.,makes%20it%20fast%20and%20lightweight."
        }
      ],
      "Data Analyst": [
        {
          name: "SQL for Data Analysis",
          link: "https://www.udacity.com/course/sql-for-data-analysis--ud198"
        },
        {
          name: "Data Visualization with Python",
          link: "https://www.geeksforgeeks.org/data-visualization-with-python/"
        }
      ],
      "Graphic Designer": [
        {
          name: "Graphic Design Fundamentals",
          link:
            "https://edu.gcfglobal.org/en/beginning-graphic-design/fundamentals-of-design/1/"
        },
        {
          name: "UI/UX Design Principles",
          link: "https://www.springboard.com/blog/design/ux-design-principles/"
        }
      ],
      "Software Engineer": [
        {
          name: "Algorithms and Data Structures",
          link:
            "https://developer.mozilla.org/en-US/docs/Web/Guide/Introduction_to_Web_development"
        },
        {
          name: "Python Programming Masterclass",
          link:
            "https://developer.mozilla.org/en-US/docs/Web/Guide/Introduction_to_Web_development"
        }
      ]
      // "Data Analyst": [
      //   "SQL for Data Analysis",
      //   "Data Visualization with Python"
      // ],
      // "Graphic Designer": [
      //   "Graphic Design Fundamentals",
      //   "UI/UX Design Principles"
      // ],
      // "Software Engineer": [
      //   "Algorithms and Data Structures",
      //   "Python Programming Masterclass"
      // ]
    }[suggestedJobRoles[0]] || [];

  //changes
  //changes
  return (
    <div>
      <div className="outlined-box">
        <h2>Job Role Suggestions</h2>
        <ul>
          {suggestedJobRoles.length > 0 ? (
            suggestedJobRoles.map((role, index) => <li key={index}>{role}</li>)
          ) : (
            <li>No matching job roles found for the entered skills.</li>
          )}
        </ul>
      </div>
      {recommendedSkills.length > 0 && (
        <div className="outlined-box">
          <h2>Recommended Skills</h2>
          <ul>
            {recommendedSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      )}
      {recommendedCourses.length > 0 && (
        <div className="outlined-box">
          <h2>Recommended Courses and Certifications</h2>
          <ul>
            {recommendedCourses.map((course, index) => (
              <li key={index}>
                <a href={course.link} target="_blank" rel="noopener noreferrer">
                  {course.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="outlined-box">
        <h2>Resume Score</h2>
        {suggestedRoles.length > 0 ? (
          suggestedRoles.map((role, index) => (
            <div key={index}>
              <p>
                Percentage of Skills Matched:{" "}
                {calculateSkillMatchPercentage(role.skills, userSkills)}%
              </p>
              {/* <p>
                Please Note:
                <i>
                  The Resume Score is Percentage of User's skills for the
                  suggested job role.
                </i>
                <i>User can improve percentage by adding Recommended Skills</i>
              </p> */}
            </div>
          ))
        ) : (
          <p>No matching job roles found for the entered skills.</p>
        )}
      </div>
    </div>
  );
};

function calculateSkillMatchPercentage(requiredSkills, userSkills) {
  const matchedSkills = requiredSkills.filter((skill) =>
    userSkills.includes(skill)
  );
  const percentage = (matchedSkills.length / requiredSkills.length) * 100;
  return percentage.toFixed(2);
}

export default SkillSuggestions;

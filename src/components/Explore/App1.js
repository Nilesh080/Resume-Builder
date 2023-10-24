import React, { useState } from "react";
import "./App1.css";
import SkillInput from "./SkillInput";
import SkillSuggestions from "./SkillSuggestions";

function App() {
  const [userSkills, setUserSkills] = useState("");
  return (
    <div className="App">
      <h1>Skill Matcher</h1>
      <SkillInput onSkillsChange={setUserSkills} />
      {userSkills && <SkillSuggestions skills={userSkills} />}
    </div>
  );
}

export default App;

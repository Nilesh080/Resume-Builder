import React from "react";
const About = () => {
	return (
		<div className="About" style={{textAlign:"center"}}>
			<h1 style={{textAlign:"center",padding:"10px",letterSpacing:"10px"}}>SkillScan</h1>
			<div className="about-us" style={{padding:"30px"}}>
      <h3 style={{textAlign:"center"}}>About Us</h3>
      <p>We are a team of passionate engineers and designers who are dedicated to building the best resume builder and analyser app on the market. Our goal is to make it easy for everyone to create a professional and effective resume that will help them land their dream job.</p>

      <p>We know that building a resume can be a daunting task, so we have designed our app to be as user-friendly as possible. Our step-by-step process makes it easy to create a resume that is tailored to your specific needs and goals. And our AI-powered analyser will give you feedback on your resume so that you can make sure it is the best it can be.</p>

      <p>We are committed to providing our users with the best possible experience. We are constantly adding new features and improving our app to make it even better. If you have any feedback or suggestions, please don't hesitate to contact us.</p>

      <h3 style={{textAlign:"center"}}>Our Mission</h3>

      <p style={{textAlign:"center"}}>Our mission is to make it easy for everyone to create a professional and effective resume that will help them land their dream job.</p>

      <h3 style={{textAlign:"center"}}>Our Values</h3>

      <ul style={{listStyleType:"none"}}>
        <li>User-friendly design</li>
        <li>AI-powered analysis</li>
       <li>Continuous improvement</li>
       <li>Commitment to our users</li>
      </ul>

      <h3 style={{textAlign:"center"}}>Contact Us</h3>

      <p>If you have any feedback or suggestions, please don't hesitate to contact us at [abc@mail.com]</p>
    </div>
		</div>
	);
};

export default About;
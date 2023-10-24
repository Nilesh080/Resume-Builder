import React from 'react';
import Header from '../components/Header/header';
import { Component } from 'react';
import Footer from '../components/Footer/Footer';

import process from '../components/assets/process.svg'
import resume from '../components/assets/resume.svg'
import analyse from '../components/assets/analyse.svg'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import analyze from '../components/Analysis/Analyze'


class MyComponent extends Component{
	render() {
	return (
	<div>
	<Header />
	<div style={{textAlign:"center",paddingTop:"20px"}}>
	<h1>Get Started</h1>
	</div>
	<div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
	
	<img src = {process} alt='process' style={{width :"750px",padding: "50px"}}></img>		
	</div>
	<section class="section bg-features bg-light" id="features">
		<div class="container">
	<div class="row">
		<div class="col-lg-12">
		{/* <div class="title-heading">
		<h3 class="text-dark">Our Features</h3>
	</div>*/}
	</div></div> 
	<div class="align-items-center row">
		<div class="col-lg-6">
		<h3 class="text-dark">Our Features</h3>

			<div class="features-content">
				<div class="features-icon">
					</div><h4 class="fw-normal text-dark mb-3 mt-4">Resume Builder</h4>
					<p class="text-muted f-14">Welcome to our Resume Builder – your gateway to crafting a standout professional profile. Whether you're a seasoned pro looking to update your credentials or just starting your career journey, our user-friendly tool simplifies the process.!</p>
					<p class="text-muted f-14"> Create a tailored, polished resume that showcases your unique skills and experiences effortlessly. Let's begin your journey towards a remarkable career – start building your resume now.</p>
					<p class="mb-0 text-uppercase f-13">
						<a href='create/'>Create Resume <span class="right-arrow ms-1">⇾</span></a></p></div></div>
						<div class="col-lg-6"><div class="features-img">
						<img src = {resume} alt='process' style={{width :"450px",padding: "70px" }}></img>						
						
				</div></div></div></div>
				<div class="container">
	<div class="row">
	</div>
	<div class="container">

	<div class="align-items-center row">
		<div class="col-lg-6">
		<div class="features-img">
						<img src = {analyse} alt='process' style={{width :"400px",padding: "50px"}}></img>						
						
				</div></div>
				<div class="col-lg-6">
			<div class="features-content">
				<div class="features-icon">
					<i class="pe-7s-science text-primary"></i>
					</div><h4 class="fw-normal text-dark mb-3 mt-4">Resume Analyser</h4>
					<p class="text-muted f-14">Step into the world of professional excellence with our Resume Analyzer. Curious to know how your resume measures up? Our advanced algorithm meticulously evaluates your resume's content, formatting, and keyword relevance to provide you with an insightful score. </p>
					<p class="text-muted f-14">Use these precise insights to elevate your resume and make a lasting impression on potential employers. Take charge of your career journey and optimize your resume for success with our Resume Analyzer today!</p>
					<p class="mb-0 text-uppercase f-13">
						<a href='explore/'>Score my Resume <span class="right-arrow ms-1">⇾</span></a></p></div></div>
					</div>	</div></div>
					</section>
		<Footer />
		</div>
	)
  }}
export default MyComponent;
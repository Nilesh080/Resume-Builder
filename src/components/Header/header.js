import React from 'react';
import resumeSvg from '../assets/resume_header.svg'
import styles from './Header.module.css'
// import Body from './body'
// const Home = () => {
// 	return (
// 		<div>
// 			<h1>Welcome to Geeks for Geeks</h1>
// 		</div>
// 	);
// };

// export default Home;
const Header = ()=>{
	return(
	<div className={styles.container}>
		<div className={styles.left}>
		<p className={styles.heading}>Create a <span>Resume</span></p>
		<p className={styles.heading}>That Gets <span>You</span> Noticed</p>
		<p className={styles.heading}>Make Your Resume  <span>Stand Out</span></p>

		</div>
		<div className={styles.right}>
			<img src = {resumeSvg} alt='Resume'></img>		
	</div>
</div>
);
}


export default Header;
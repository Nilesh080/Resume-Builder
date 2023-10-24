import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./Footer.styles";
import { GitHub } from 'react-feather';

  
const Footer = () => {
return (
	<Box>
	<h3 style={{ textAlign: "center",
				marginTop: "-50px",
                letterSpacing:"5px",
                color: "#c9e0f6",
                }}>
                    SkillScan : Make your Resume Standout
	</h3>
    <br></br>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<p style={{color:"white",
                        fontSize :"12px"}}>
            SkillScan helps you create a resume that gets you interviews, with our easy-to-use builder and smart analyzer.
            </p>
		</Column>
		<Column>
			<Heading>Project Details</Heading>
			<FooterLink href="#">Repository</FooterLink>
			<FooterLink href="/about">About</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="mailto:ask271103@gmail.com">Email</FooterLink>
			<FooterLink href="/index">Website</FooterLink>
			<FooterLink href="#">Contact : 99999 99999</FooterLink> 
		</Column>
		<Column>
			<Heading>Developed By</Heading>
			<FooterLink href="https://github.com/Antara1212" target='_blank'>
				< span style={{ marginLeft: "10px" }}>
				Antara Kolhatkar  &nbsp;<GitHub style={{width:"20px"}}/>
				</span>
			</FooterLink>

			<FooterLink href="https://github.com/Anujeet23" target='_blank'>
				<span style={{ marginLeft: "10px" }}>
				Anujeet Kunturkar  &nbsp;<GitHub style={{width:"20px"}}/>
				</span>
			</FooterLink>

			<FooterLink href="https://github.com/MervisMas12" target="_blank">
				<span style={{ marginLeft: "10px" }}>
				Mervis Mascarenhas &nbsp;<GitHub style={{width:"20px"}}/>
				</span>
			</FooterLink>
			<FooterLink href="https://github.com/Nilesh080" target="_blank">
				<span style={{ marginLeft: "10px" }}>
				Nilesh Mishra &nbsp; <GitHub style={{width:"20px"}}/>
				</span>
            </FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;

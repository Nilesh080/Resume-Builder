// import React from "react";
import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
//   MDBBtn,
  MDBNavbarNav,
  MDBIcon,
} from 'mdb-react-ui-kit';
import logo from '../assets/logo.svg'
// import Header from '../../pages/header';
export default function Navbar() {
  const [showNavNoTogglerThird, setShowNavNoTogglerThird] = useState(true);

  return (
    <>
      <MDBNavbar expand='lg' light bgColor='info'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarTogglerDemo03'
            aria-controls='navbarTogglerDemo03'
            aria-expanded='true'
            aria-label='Toggle navigation'
            onClick={() => setShowNavNoTogglerThird(!showNavNoTogglerThird)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBNavbarBrand href='/index'>SkillScan &nbsp;<img src = {logo} alt='Resume'></img>	</MDBNavbarBrand>
          <MDBCollapse navbar show={showNavNoTogglerThird}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='/index'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/create'>Create</MDBNavbarLink>
              </MDBNavbarItem>  <MDBNavbarItem>
                <MDBNavbarLink href='/analyze'>Analyze</MDBNavbarLink>
              </MDBNavbarItem>
			  <MDBNavbarItem>
                <MDBNavbarLink href='/about'>About</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/contact'>Contact</MDBNavbarLink>
              </MDBNavbarItem>
			  <MDBNavbarItem>
                <MDBNavbarLink href='/signup'>Sign up</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/reccomendation'>Skills</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/explore'>Explore Opportunities</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
           
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

// import { Nav, NavLink, NavMenu }
// from "./NavbarElements";

// const Navbar = () => {
// 	return (
// 		<>
// 			<Nav>
// 				<NavMenu>
// 					<NavLink to ="/index" activeStyle>
// 						Home
// 					</NavLink>
// 					<NavLink to="/about" activeStyle>
// 						About
// 					</NavLink>
// 					<NavLink to="/contact" activeStyle>
// 						Contact Us
// 					</NavLink>
// 					<NavLink to="/blogs" activeStyle>
// 						Blogs
// 					</NavLink>
// 					<NavLink to="/sign-up" activeStyle>
// 						Sign Up
// 					</NavLink>
// 				</NavMenu>
// 			</Nav>
// 		</>
// 	);
// };

// export default Navbar;

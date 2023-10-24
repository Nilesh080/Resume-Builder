import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

const SignUp = () => {
  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundColor: 'white'}}>
      <div className='mask gradient-custom-2'></div>
      <MDBCard className='m-2' style={{maxWidth: '500px',fontSize:'0.7rem'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <MDBInput wrapperClass='mb-3' label='Your Name' size='lg' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-3' label='Your Email' size='lg' id='form2' type='email'/>
          <MDBInput wrapperClass='mb-3' label='Password' size='lg' id='form3' type='password'/>
          <MDBInput wrapperClass='mb-3' label='Repeat your password' size='lg' id='form4' type='password'/>
          <div className='d-flex flex-row justify-content-center mb-2'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div>
          <MDBBtn className='mb-3 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default SignUp;
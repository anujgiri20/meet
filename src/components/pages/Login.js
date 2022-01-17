import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { auth, providerGoogle, providerGithub } from '../../firebase';
import logo from '../../images/google_meet_logo.png';
import "./login.css"
const Login = () => {
  const signInGoogle = (e) => {
    e.preventDefault();
    auth.signInWithPopup(providerGoogle).catch((err) => console.log(err));
  };
  
  return (
    <div className='logindiv'>
      <div>
        <img className="logo" src={logo} alt='google_meet_logo' />
        <h1 className='heading'>Sign In</h1>
        <p className='subheading'>Google Meet Clone</p>
        <button className="btn_" onClick={signInGoogle}> Sign In via Google</button>
        {/* <Button onClick={signInGithub}>Sign In via Github</Button> */}
     
       
      </div>
    </div>
  );
};

export default Login;



import React from 'react';
import styled from 'styled-components';
import HeaderIconPhoto from '../../images/google_meet_header.jpg';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { useState } from "react"
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import "./header.css"
const Header = () => {
  const [tog, settoggle] = useState(false);

  let current = new Date();
  console.log(current);
  current = current.toDateString();

  const [user] = useAuthState(auth);


  const name = user?.email
  const logo = [...name]
  const HeaderOptions = ({ title, tooltip }) => {
    return (
      <Button
        style={{ width: 'fit-content', padding: '5px 0', marginLeft: '5px' }}
      >
        <span className='material-icons-outlined' style={{ color: '#63676c' }}>
          {title}
        </span>
      </Button>
    );
  };

  return (
    <HeaderContainer>
      <HeaderIcon src={HeaderIconPhoto}></HeaderIcon>
      <HeaderContent>
        <div className='headerleft header_compo'>
          <h3 style={{
            fontWeight: "100"
          }}>{current}</h3>
          <span style={{ marginLeft: "20px" }}><HelpOutlineIcon /></span>
          <span style={{ marginLeft: "20px" }}><AnnouncementIcon /></span>
          <span style={{ marginLeft: "20px" }}><SettingsIcon /></span>
        </div>




        <HeaderContentRight>

          {/* <RoundImg onClick={()=>settoggle(!tog)} src={user?.photoURL} alt='<user_photo>' /> */}
          <h1
            onClick={() => settoggle(!tog)}
            className='logomaker' style={{
              fontSize: "1rem", color: "white", fontWeight: "100"
            }}>{logo[0]}</h1>
          {
            tog ?
              (
                <div
                  className='divlogo'
                  style={{
                    position: "absolute",
                    top: "50px",
                    padding: "10px",
                    backgroundColor: "white"
                  }}
                >
                  <h1
                    onClick={() => settoggle(!tog)}
                    className='logomaker_' style={{
                      fontSize: "2.2rem", color: "white", fontWeight: "100"
                    }}>{logo[0]}</h1>



                  <h1
                    className='email'
                    style={{ fontSize: "1rem", color: "grey", fontWeight: "100" }}>{user?.email}</h1>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      console.log('signing out');
                      auth.signOut();
                    }}
                  className='signout_button'
                  >
                  Signout
                  </button>
                </div>)

              : ""
          }


          {/* <StyledLink to='/about'>About</StyledLink> */}

        </HeaderContentRight>
      </HeaderContent>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px 10px 15px;
  height: 5%;
  
`;

const HeaderIcon = styled.img`
  object-fit: contain;
  height: 35px;
  width: auto;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;


const HeaderContentRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const RoundImg = styled.img`
  object-fit: contain;
  height: 35px;
  width: auto;
  border-radius: 50%;
  cursor: pointer;
  margin-left: 10px;
  &:hover {
    opacity: 0.8;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  width: fit-content;
  padding: 5px 20px;
  margin-left: 10px;
  color: rgba(0, 0, 0, 0.87);
  cursor: pointer;
  border-radius: 5px;
  font-weight: normal;
  font-size: 1.17em;
  color: #00675b;
  :hover {
    background-color: rgba(128, 128, 128, 0.1);
  }
`;
export default Header;
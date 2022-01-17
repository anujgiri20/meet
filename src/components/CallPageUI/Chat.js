import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import ChatBox from './ChatBox';
import { db } from '../../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import MessageItem from './MessageItem';
import CloseIcon from '@material-ui/icons/Close';
import PeopleIcon from '@material-ui/icons/People';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import {useState} from "react"
import "./chat.css"
const Chat = ({ roomID, user }) => {
  const bottomRef = useRef(null);
  const[chat_,setchat] = useState(true)
  console.log('roomID');
  console.log(roomID);

  console.log('user');
  console.log(user);

  const [messages, loading] = useCollection(
    db
      .collection('rooms')
      .doc(roomID)
      .collection('messages')
      .orderBy('timeStamp', 'asc')
  );

  return (
<>
{chat_ ?


    (<ChatContainer>
      <Header>
        <h3>Meeting Details</h3>
        <span class='material-icons-outlined ' onClick={()=>setchat(!chat_)}><CloseIcon /></span>
      </Header>

      <HeaderTabs>
        <Tab>
          <span class='material-icons-outlined'><PeopleIcon /></span>
          
        </Tab>
        <Tab active>
          <span class='material-icons'><ChatBubbleIcon /></span>
        </Tab>
      </HeaderTabs>

      <ChatSection>
        <ChatBlock bottomRef={bottomRef}>
          {messages?.docs.map((doc) => {
            const { message, timeStamp, user } = doc.data();
            return (
              <MessageItem
                key={doc.id} //message doc id
                message={message}
                timeStamp={timeStamp}
                user={user}
              />
            );
          })}
          <div ref={bottomRef}></div>
        </ChatBlock>
        <ChatBox roomID={roomID}></ChatBox>
      </ChatSection>
    </ChatContainer>)
    :
    
    
    
    <div  className="chatbox">
      <h1
      style={{fontSize:"1rem",cursor:"pointer",marginTop:"2px"}}
      onClick={()=>setchat(!chat_)}>ChatBox</h1>
              {/* <span style={{color:"white"}} onClick={()=>setchat(!chat_)}><CloseIcon /></span> */}
    </div>

        }

    </>

  );
};

const ChatContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: white;
  height: calc(100vh - 90px);
  width: 350px;
  /* border: 1px solid black; */
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  // @media only screen and (max-width:800px)
  // {

  //   display:none
  // }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #202124;
  padding: 20px;
  > h3 {
    font-size: 1.125rem;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 1.5rem;
  }
  > span {
    :hover {
      cursor: pointer;
      opacity: 0.2;
    }
  }
`;

const ChatBlock = styled.div`
  padding: 20px;
  margin-bottom: 30px;
  /* border: 1px solid black; */
  max-height: calc(100vh - 90px - 220px);
  overflow-y: auto;
`;

const HeaderTabs = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
`;

const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #555;
  padding: 10px;
  transition: border 300ms ease-out;
  :hover {
    cursor: pointer;
    background-color: rgba(126, 126, 126, 0.1);
  }
  p {
    margin-left: 10px;
  }
  ${(props) =>
    props.active &&
    css`
      border-bottom: 2px solid #00796b;
      color: #00796b;
    `}
`;

const ChatSection = styled.div`
  flex: 1;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default Chat;
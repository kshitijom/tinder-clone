import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './Chat.css';
import { Link } from 'react-router-dom';

function Chat({ name, message, profilePic, timestamp }) {
  return (
    <Link to={`/chat/${name}`}>
      <div className='Chat'>
        <Avatar className='Chat-image' alt={name} src={profilePic}/>
        <div className='Chat-details'>
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className='Chat-timestamp'>{timestamp}</p>
      </div>
    </Link> 
  );
}

export default Chat;

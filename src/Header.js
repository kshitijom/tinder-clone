import React from 'react';
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import TinderLogo from './tinder.png';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {Link, useHistory} from 'react-router-dom';

function Header({backButton}) {
  const history = useHistory();
  return (
    <div className='Header'>
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon fontSize='large' className='Header-icon'/>
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className='Header-icon' fontSize='large'/>
        </IconButton>
      )}
      <Link to='/'>
        <img className='Header-logo' src={TinderLogo} alt='tinder logo'/>
      </Link>
      <Link to='/chat'>
        <IconButton>
          <ChatBubbleIcon className='Header-icon' fontSize='large'/>      
        </IconButton>
      </Link>
    </div>
  )
}

export default Header

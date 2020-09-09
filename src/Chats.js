import React from 'react';
import Chat from './Chat';
import './Chats.css';

function Chats() {
  return (
    <div className='Chats'>
      <Chat 
        name='Mazikeen'
        message="I should warn you, I'm a soulless demon!"
        profilePic='https://i.pinimg.com/originals/58/78/c8/5878c82f24c77c35a4db3286dc5fad25.jpg'
        timestamp='50 minutes ago'
      />
      <Chat 
        name='Lucifer Morningstar'
        message='Well hello there, Detective!'
        profilePic='https://i1.wp.com/www.nerdsandbeyond.com/wp-content/uploads/2019/06/Lucifer.jpg'
        timestamp='3 hours ago'
      />
      <Chat 
        name='Chloe Decker'
        message="So that's what I am, a gift for you?!"
        profilePic='https://i2.wp.com/www.nerdsandbeyond.com/wp-content/uploads/2019/05/Lucifer-Recap-Chloe-Featured-e1557021846421.jpg?fit=891%2C603&ssl=1'
        timestamp='2 days ago'
      />
    </div>
  )
}

export default Chats

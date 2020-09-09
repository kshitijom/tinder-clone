import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css';

function ChatScreen() {
  const [input, setInput] = useState();
	const [ messages, setMessages ] = useState([
		{
			name: 'Lucifer Morningstar',
			image: 'https://i1.wp.com/www.nerdsandbeyond.com/wp-content/uploads/2019/06/Lucifer.jpg',
			message: "Look who's using tinder!"
		},
		{
			name: 'Lucifer Morningstar',
			image: 'https://i1.wp.com/www.nerdsandbeyond.com/wp-content/uploads/2019/06/Lucifer.jpg',
			message: 'Well hello there, Detective!'
		},
		{
			message: "Hello, Lucifer. I see you're back."
		}
  ])
  
  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput('');
  }

	return (
		<div className="ChatScreen">
			<p className="ChatScreen-timestamp">YOU MATCHED WITH LUCIFER ON 10/08/20</p>
			{messages.map(
				(msg) =>
					msg.name ? (
						<div className="ChatScreen-msg">
							<Avatar className="ChatScreen-img" alt={msg.name} src={msg.image} />
							<p className="ChatScreen-text">{msg.message}</p>
						</div>
					) : (
						<div className="ChatScreen-msg">
							<p className="ChatScreen-textUser">{msg.message}</p>
						</div>
					)
			)}
			<form className="ChatScreen-input">
				<input value={input} onChange={e => setInput(e.target.value)} placeholder="Type your message..." type="text" className="ChatScreen-inputField" />
				<button onClick={handleSend} className="ChatScreen-sendBtn">SEND</button>
			</form>
		</div>
	);
}

export default ChatScreen;

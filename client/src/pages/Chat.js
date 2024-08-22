import React, { useEffect, useState } from 'react';
import { API_URL } from '../constants'
import Bubble from '../components/Bubble';
import './Chat.css';

const Chat = ({ user }) => {
    const [chats, setChats] = useState([]);
    const [chat, setChat] = useState();
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState({ chat_id: 0, user_id: 0, message: "" });

    const getChats = async () => {
        const response = await fetch(
            API_URL + '/api/chats/user/' + user.id,
            { method: 'GET', redirect: "follow", credentials: 'include' }
        ).then((response) => response);

        if (response.redirected) {
            document.location = response.url;
        }
        const data = await response.json();
        setChats(data);
    }

    const getMessages = async () => {
        const response = await fetch(API_URL + '/api/messages/chat/' + chat.id,
            { method: 'GET', redirect: "follow", credentials: 'include' }
        ).then((response) => response);

        const data = await response.json();
        setMessages(data);
    }

    const createText = async () => {
        if (text.message.trim() === '') return;

        const messageData = {
            ...text,
            chat_id: chat.id,
            user_id: user.id
        };

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(messageData),
            credentials: 'include'
        };

        const response = await fetch(API_URL + '/api/messages', options);
        setText({ ...text, message: "" });
        getMessages();
    }

    const handleInputChange = (e) => {
        setText({ ...text, message: e.target.value });
    };

    const logout = async () => {
        const options = {
            method: 'POST',
            credentials: 'include'
        }

        const response = await fetch(API_URL + '/logout', options);
        window.location.href = '/';
    }

    useEffect(() => {
        getChats();

        if (chat) {
            getMessages();
        }
    }, [chat]);

    return (
        <div className="container">
            <div className="sidebar">
                <div className="chats-header">
                    <h4>Messenger</h4>
                </div>
                <div className="chat-list">
                    {
                        chats.length > 0 ? (
                            chats.map(chat =>
                                <div className='chat-item' role='button' onClick={() => setChat(chat)}>
                                    <img className='chat-avatar' src={chat.img_url} alt='Chat Image' />
                                    <div className='chat-info'>
                                        <div className='chat-name'>{chat.name}</div>
                                    </div>
                                </div>
                            )
                        ) : (
                            <></>
                        )}
                </div>
            </div>
            <div className="chat-window">
                <div className="chat-header">
                    {
                        chat ?
                            <div className="chat-group-name">{chat.name}</div>
                            : <div></div>
                    }
                    <button onClick={logout} className='headerBtn'>Logout</button>
                </div>
                <div className="chat-messages">
                    {
                        messages && messages.length > 0 ?
                            messages.map(message =>
                                <Bubble message={message} user={user} />
                            )
                            : ''
                    }
                </div>
                {
                    chat ? 
                        <div className="chat-input">
                            <input type="text" placeholder="Type a message" value={text.message} onChange={handleInputChange} />
                            <button onClick={createText}>Send</button>
                        </div> : <div></div>
                }
                
            </div>
        </div>
    )

}

export default Chat;
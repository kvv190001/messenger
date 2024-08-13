import React, { useEffect, useState } from 'react';
import './Chat.css';

const Chat = ({ user }) => {
    const SERVER_URL = 'http://localhost:8080';

    const [chats, setChats] = useState([]);

    const getChats = async () => {
        console.log(SERVER_URL)
        const response = await fetch(
            SERVER_URL + '/api/chats/user/' + user.id,
            { method: 'GET', redirect: "follow", credentials: 'include' }
        ).then((response) => response);

        if (response.redirected) {
            document.location = response.url;
        }
        const data = await response.json();
        setChats(data);
    }

    const logout = async () => {
        const options = {
            method: 'POST',
            credentials: 'include'
        }

        const response = await fetch('http://localhost:8080/logout', options);
        window.location.href = '/';
    }

    function handleClick() {
        getChats();
    }

    useEffect(() => {
        getChats();
    }, []);

    return (
        <div className="container">
            <div className="sidebar">
                <div className="chats-header">
                    <span>Chats</span>
                </div>
                <div className="chat-list">
                    {/* example chat item */}
                    <div className="chat-item">
                        <div className="chat-avatar">JA</div>
                        <div className="chat-info">
                            <div className="chat-name">John Appleseed</div>
                            <div className="chat-message">Hey man, are you down for the next apple convention next yr?</div>
                            <div className="chat-time">Yesterday</div>
                        </div>
                    </div>
                    {
                        chats.length > 0 ? (
                            chats.map(chat =>
                                <div className='chat-item'>
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
                    <div className="chat-group-name">Group Chat</div>
                    <button onClick={logout} className='headerBtn'>Logout</button>
                </div>
                <div className="chat-messages">
                    {
                        //messages here
                    }
                </div>
                <div className="chat-input">
                    <input type="text" placeholder="Type a message" />
                    <button>Send</button>
                </div>
            </div>
        </div>
    )

}

export default Chat;
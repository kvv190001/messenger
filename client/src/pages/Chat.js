import React, { useEffect, useState } from 'react';
import { API_URL } from '../constants'
import Bubble from '../components/Bubble';
import './Chat.css';

const Chat = ({ user }) => {
    const [chats, setChats] = useState([]);

    const getChats = async () => {
        console.log(API_URL)
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

    const logout = async () => {
        const options = {
            method: 'POST',
            credentials: 'include'
        }

        const response = await fetch(API_URL + '/logout', options);
        window.location.href = '/';
    }

    function handleClick() {
        getChats();
    }

    useEffect(() => {
        getChats();
    }, []);

    const ourTextMessage = {
        chat_id: null,
        user_id: user?.id,
        message: "I'm fixing a hole where the rain gets in, and stops my mind from wandering.. where it will go?",
        img_url: null,
        created_at: "6:44 PM"
    };

    const otherTextMessage = {
        chat_id: null,
        user_id: null,
        message: "I'm fixing a hole where the rain gets in, and stops my mind from wandering.. where it will go?",
        img_url: null,
        created_at: "6:44 PM"
    };

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
                    <Bubble message={ourTextMessage}/>
                    <Bubble message={otherTextMessage}/>
                    <Bubble message={ourTextMessage}/>
                    <Bubble message={otherTextMessage}/>
                    <Bubble message={ourTextMessage}/>
                    <Bubble message={otherTextMessage}/>
                    <Bubble message={ourTextMessage}/>
                    <Bubble message={ourTextMessage}/>
                    <Bubble message={ourTextMessage}/>
                    <Bubble message={ourTextMessage}/>
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
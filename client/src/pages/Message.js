import React, { useEffect, useState } from 'react';
import './Message.css';

const Messages = ({ user, chat }) => {
    const SERVER_URL = 'http://localhost:8080';

    const [messages, setMessages] = useState([]);

    const getMessages = async () => {
        console.log(SERVER_URL)
        const response = await fetch(
            SERVER_URL + '/api/messages/' + chat.id,
            { method: 'GET', redirect: "follow", credentials: 'include' }
        ).then((response) => response);

        if (response.redirected) {
            document.location = response.url;
        }
        const data = await response.json();
        setMessages(data);
    }

    useEffect(() => {
        getMessages();
    }, []);

    return (
        {
            messages.length > 0 ? (
                messages.map(message =>
                    message.img_url.length > 0 ? (
                        <div className={'messageBubble' (message.user_id === user.id) ? 'Sender' : 'Receiver'}>
                            {message.message}
                        </div>
                    ) : (
                        <div className={'imageBubble' (message.user_id === user.id) ? 'Sender' : 'Receiver'}>
                            <img src={message.img_url} className="image"/>
                        </div>
                    )
                )
            ) : (
                <></>
            )
        }
    )

}

export default Message;
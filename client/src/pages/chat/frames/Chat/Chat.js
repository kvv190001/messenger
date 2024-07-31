import React, {useEffect, useState} from 'react';

const Chat = () => {
    const SERVER_URL = 'http://localhost:8080';

    const [chats, setChats] = useState([]);

    const getChats = async () => {
        console.log(SERVER_URL)
        const response = await fetch(
            SERVER_URL + '/api/chats',
            {method: 'GET', redirect: "follow", credentials: 'include'}
        ).then((response) => response);

        if(response.redirected){
            document.location = response.url;
        }
        const data = await response.json();
        setChats(data);
    }

    function handleClick(){
        getChats();
    }

    useEffect(() => {
        getChats();
    }, []);

    return(
        <div className="Chats">
            <h2>Chat List</h2>
            {chats.length > 0 ? (
                chats.map(chat =>
                <div key={chat.id}>
                    {chat.name}
                    {chat.img_url}
                </div>
                )
            ) : (
                <p>None</p>
            )}
        </div>
    )

}

export default Chat;
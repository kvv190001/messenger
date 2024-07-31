import React, { useState, useEffect } from 'react';
import logo from './assets/users.svg';
import './App.css';
import Chat from './pages/chat/frames/Chat/Chat.js'

const App = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:8080/api/users', {credentials: 'include'})
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return(
        <div className="App">
            <Chat/>
            <h2> User List </h2>
                {users.length > 0 ? (
                    users.map(user =>
                        <div key={user.id}>
                            {user.username}
                        </div>
                    )
                ) : (
                     <p>None</p>
                )}
        </div>
    )
}

export default App;

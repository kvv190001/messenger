import React, { useState, useEffect } from 'react';
import { API_URL } from './constants.js';
import './pages/Chat.css';
import './App.css';
import Chat from './pages/Chat.js'
import Login from './pages/Login.js';

const App = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        const getUser = async () => {
            const response = await fetch(API_URL + '/api/users/login/success', { credentials: 'include' });
            const data = await response.json();
            setUser(data);
        }

        getUser();
    }, []);

    const logout = async () => {
        const options = {
            method: 'POST',
            credentials: 'include'
        }

        const response = await fetch(API_URL + '/logout', options);
        window.location.href = '/';
    }

    return (
        <div className="App">
            {
                user ?
                    <Chat user={user} /> : <Login />
            }
            {/* {
                 user ?
                    <div key={user.id}>
                        {user.username}
                    <button onClick={logout} className='headerBtn'>Logout</button>
                    </div> : <></>

            } */}
        </div>
    )
}

export default App;

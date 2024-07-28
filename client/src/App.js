import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('/api/users')
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
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="App-intro">
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
            </header>
        </div>
    )
}

export default App;

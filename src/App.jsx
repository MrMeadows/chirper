import React, { useState } from 'react';
import Feed from './components/Feed.jsx';
import Input from './components/Input.jsx';
import Login from './components/Login.jsx';
import { type } from '@testing-library/user-event/dist/type/index.js';


const App = () => {

    const [loggedIn, setLoggedIn] = useState(false);

    const [chirps, setChirps] = useState([]);

    const [username, setUsername] = useState([]);

    const addLogin = (login) => {
        
        setUsername(login)
        setLoggedIn(true);
    }

    const addChirp = (username, chirpContent, timestamp) => {
        
        const newChirp = {username, chirpContent: chirpContent, timestamp: timestamp};
        setChirps(chirps => ([...chirps, newChirp]));
    }

    if (!loggedIn) {
        return <Login addLogin={addLogin} />
    } else {
        return (
            <div>
                <Feed chirps={chirps} />
                <Input addChirp={addChirp} username={username} />
            </div>
        )
    }
}

export default App;
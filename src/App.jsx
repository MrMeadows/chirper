import React, { useState } from 'react';
import Feed from './components/Feed.jsx';
import Input from './components/Input.jsx';
import Login from './components/Login.jsx';


const App = () => {

    const [chirps, setChirps] = useState([]);

    const [username, addUsername] = useState([]);

    const addChirp = (chirpContent, timestamp) => {
        
        const newChirp = {username, chirpContent: chirpContent, timestamp: timestamp};
        setChirps(chirps => ([...chirps, newChirp]));
    }

    if (username) {
        return <Login addUsername={addUsername}/>
    } else {
        return (
            <div>
                <Feed chirps={chirps} />
                <Input addChirp={addChirp} />
            </div>
        )
    }
}

export default App;
import React, { useState } from 'react';
import Feed from './components/Feed.jsx';
import Input from './components/Input.jsx';

const App = () => {

    const [chirps, setChirps] = useState([]);

    const addChirp = (username, chirpContent) => {
        const newChirp = {username, chirpContent: chirpContent};
        setChirps(chirps => ([...chirps, newChirp]));
    }

    return (
        <div>
            <Feed chirps={chirps} />
            <Input addChirp={addChirp} />
        </div>
    )
}

export default App;
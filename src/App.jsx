import React, { useState } from 'react';
import Feed from './components/Feed.jsx';
import Input from './components/Input.jsx';
import Login from './components/Login.jsx';


const App = () => {

    // const [loginName, setLoginName] = useState('');

    let loginName = "bob";

    const [chirps, setChirps] = useState([]);

    /* const loginUser = (username) => {
        const activeUser = 
    } */

    const addChirp = (username, chirpContent, timestamp) => {
        const newChirp = {username, chirpContent: chirpContent, timestamp: timestamp};
        setChirps(chirps => ([...chirps, newChirp]));
    }

    if (loginName) {
        return <Login />
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
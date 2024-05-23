import React, { useState } from 'react';
import Feed from './components/Feed.jsx';
import Input from './components/Input.jsx';
import Login from './components/Login.jsx';

const App = () => {

    const [showModal, setShowModal] = useState(false);
    
    const toggleModal = () => {
        setShowModal(!showModal);
    }

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
                    <div className="d-flex m-auto flex-column col-4 offset-col-1">
                        <button type="submit"  className="btn btn-primary mt-1" id="chirpBtn" onClick={toggleModal}>Chirp!</button>
                    </div>
                {showModal && <Input addChirp={addChirp} username={username} onClose={toggleModal} />}
            </div>
        )
    }
}

export default App;
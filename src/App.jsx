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
            <div className="container d-flex flex-column vh-100">
                <div className="d-flex my-2 h-75 mh-75 flex-column flex-grow-1">
                    <Feed chirps={chirps}/>
                </div>
                <div className="d-flex m-auto flex-column col-4 mb-2">
                    <button type="submit"  className="btn btn-primary" id="chirpBtn" onClick={toggleModal}>Chirp!</button>
                </div>
                {showModal && <Input addChirp={addChirp} username={username} onClose={toggleModal} />}
            </div>
        )
    }
}

export default App;
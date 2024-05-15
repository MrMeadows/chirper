import React, { useState } from 'react';
import dayjs from 'dayjs';

const Input = ({ addChirp }) => {

    const [username, setUsername] = useState('');
    const [chirp, setChirp] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();
        let timestamp = dayjs().format('MMM D, YYYY h:mm A');
        addChirp(username, chirp, timestamp);
        setUsername('');
        setChirp('');
    }

    return (
        <form className="container form my-2 border border-dark rounded" onSubmit={handleSubmit} style={{ width: "60%", height: "100px", verticalAlign: "bottom"}}>
            <div className="my-2 p-2 row">
                <textarea 
                    placeholder="What's chirpin'?" 
                    className="col-8" 
                    rows="3" 
                    value={chirp}
                    onChange={(e) => setChirp(e.target.value)}>
                </textarea>
                <div className="d-flex flex-column col-4 offset-col-1">
                    <input
                        type="text"
                        placeholder="Username"
                        className="mb-1"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <button type="submit"  className="btn btn-primary mt-1" id="chirpBtn">Chirp!</button>
                </div>
            </div>
        </form>
    )
}

export default Input;
import React, { useState } from 'react';
import dayjs from 'dayjs';

const Input = ({ username, addChirp, onClose }) => {

    const [chirp, setChirp] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let timestamp = dayjs().format('MMM D, YYYY h:mm A');
        addChirp(username, chirp, timestamp);
        setChirp('');
    }

    return (
        <div>
            <div 
            className="container-fluid d-flex h-100 bg-dark bg-opacity-50 align-items-center justify-content-center position-fixed top-50 start-50 translate-middle">
                <form 
                className="container d-flex form m-auto border border-dark rounded bg-danger-subtle w-50 h-50 z-1 position-relative" 
                onSubmit={handleSubmit}
                id="modal">
                    <div className="my-2 p-2 row">
                        <span class="h3 float-start position-relative" onClick={onClose}>&times;</span>
                        <textarea 
                            placeholder="What's chirpin'?" 
                            className="col-8" 
                            rows="3" 
                            value={chirp}
                            onChange={(e) => setChirp(e.target.value)}>
                        </textarea>
                        <div className="d-flex flex-column col-4 offset-col-1">
                            <button type="submit"  className="btn btn-primary mt-1" id="chirpBtn">Chirp!</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Input;
import React, { useState } from 'react';
import dayjs from 'dayjs';

const Input = ({ username, addChirp, onClose }) => {

    const [chirp, setChirp] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let timestamp = dayjs().format('MMM D, YYYY h:mm A');
        addChirp(username, chirp, timestamp);
        setChirp('');
        onClose()
    }

    return (
        <div>
            <div 
            className="container-fluid d-flex h-100 w-100 bg-dark bg-opacity-50 align-items-center justify-content-center position-fixed top-50 start-50 translate-middle">
                <form 
                className="container d-flex flex-column form pb-2 m-auto border border-dark rounded bg-danger-subtle w-50 h-50 z-1 position-relative" 
                onSubmit={handleSubmit}
                id="modal">
                    <span className="h3 right-0 m-0 p-0" onClick={onClose}>&times;</span>
                    <div className="d-flex flex-column w-100 h-100">
                        <div className="container d-flex flex-column h-auto flex-grow-1">
                            <textarea 
                                placeholder="What's chirpin'?"
                                className="w-100 p-2 fs-5 flex-grow-1 overflow-auto"
                                value={chirp}
                                onChange={(e) => setChirp(e.target.value)}>
                            </textarea>
                        </div>
                        <div className="ms-auto">
                            <div className="ms-auto">
                                <button type="submit"  className="btn btn-primary mt-1" id="chirpBtn">Chirp!</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Input;
import React, { useState } from 'react';
import dayjs from 'dayjs';

const Input = ({ username, addChirp }) => {

    const [chirp, setChirp] = useState('');

    const createChirpBtnClick = (e) => {
        let modal = document.getElementById('modal')
        modal.style.display = 'block'
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        let timestamp = dayjs().format('MMM D, YYYY h:mm A');
        addChirp(username, chirp, timestamp);
        setChirp('');
    }

    return (
        <div>
            <div className="container d-flex justify-content-center">
                <form 
                className="d-flex container form m-auto border border-dark rounded w-50 h-50 z-1 position-fixed" 
                onSubmit={handleSubmit} 
                style={{display: 'none', backgroundColor: '#A569BD'}}
                id="modal">
                    <div className="my-2 p-2 row">
                        <span class="h3 float-ends">&times;</span>
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
                <button type="button" className="btn btn-primary mb-2 w-50" onClick={createChirpBtnClick}>Create Chirp</button>
            </div>
        </div>
    )
}

export default Input;
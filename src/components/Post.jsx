import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Post = ({ username, chirp, timestamp }) => {
    
    let id = uuidv4();

    return (
        <div className="card card-body mt-3">
            <h3 className="card-title">{username}</h3>
            <p className="lead mb-1" id={id}>{chirp}</p>
            <p className="card-text mb-0 mt-2"><small>{timestamp}</small></p>
        </div>
    )
}

export default Post;
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Post = ({ username, chirp }) => {
    
    let id = uuidv4();
    
    return (
        <div className="card card-body my-3">
            <h3 className="card-title">{username}</h3>
            <p className="card-text" id={id}>{chirp}</p>
        </div>
    )
}

export default Post;
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

const Post = ({ username, chirp }) => {
    
    let id = uuidv4();
    let dateTime = dayjs().format('MMM D, YYYY h:mm A');
    
    return (
        <div className="card card-body my-3">
            <h3 className="card-title">{username}</h3>
            <p className="card-text" id={id}>{chirp}</p>
            <p>{dateTime}</p>
        </div>
    )
}

export default Post;
import React from 'react';

const Post = ({ username, chirp }) => {
    return (
        <div className="card card-body my-3">
            <h3 className="card-title">{username}</h3>
            <p className="card-text">{chirp}</p>
        </div>
    )
}

export default Post;
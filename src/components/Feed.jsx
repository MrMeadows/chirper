import React from 'react';
import Post from './Post.jsx';


const Feed = ({ chirps }) => {
    return (
        <div 
            className="container my-2 border border-dark rounded"
            style={{ width: "60%", height: "400px", verticalAlign: "top", overflow: "auto"}}>
            {chirps.map((chirp, index) => (
                <Post key={index} username={chirp.username} chirp={chirp.chirpContent} timestamp={chirp.timestamp}/>
            ))}
        </div>
    )
}

export default Feed;
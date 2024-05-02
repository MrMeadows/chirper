import React from 'react';
import Post from './Post.jsx';

const Feed = () => {
    return (

        <div className="container my-2 border border-dark rounded" style={{ width: "60%", height: "400px", verticalAlign: "top"}}>
            <Post />
        </div>
    )
}

export default Feed;
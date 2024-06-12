import React from 'react';
import Post from './Post.jsx';


const Feed = ({ chirps }) => {
    return (
        <div 
            className="container border border-dark rounded w-75 h-100 mh-100"
            style={{verticalAlign: "top", overflow: "auto"}}>
            {(chirps.map((chirp, index) => (
                <Post key={index} username={chirp.username} chirp={chirp.chirpContent} timestamp={chirp.timestamp}/>
            )).reverse())}
            <Post username="jimmy24" chirp="what it do, homies?" timestamp="May 22, 2024 6:50 PM"/>
            <Post username="l33ds1ng3r" chirp="my mom found my stash of comic books last wensday... RIP Kitty Pride :,(" timestamp="April 2, 2024 6:17 PM"/>
            <Post username="rancidPot_Pie" chirp="i did it. i finally beat halo 3 legendary all skulls solo. #hayabusa #booyah" timestamp="Jan 14, 2024 9:21 PM"/>
        </div>
    )
}

export default Feed;
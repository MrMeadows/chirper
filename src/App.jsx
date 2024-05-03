import React from 'react';
import Feed from './components/Feed.jsx';
import Input from './components/Input.jsx';

const App = () => {

    const chirpBtn = document.getElementById('chirpBtn')

    chirpBtn.addEventListener("click", function () {
        console.log('did I do it?');
    });
    
    return (
        <div>
            <Feed />
            <Input />
        </div>
    )
}

export default App;
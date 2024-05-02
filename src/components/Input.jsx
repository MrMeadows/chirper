import React from 'react';

const Input = () => {
    return (
        <div className="container form my-2 border border-dark rounded" style={{ width: "60%", height: "100px", verticalAlign: "bottom"}}>
            <div className="my-2 p-2 row">
                <textarea placeholder="What's chirpin'?" className="col-8" rows="3"></textarea>
                <div className="d-flex flex-column col-4 offset-col-1">
                    <input type="text" placeholder="Username" className="mb-1"></input>
                    <button className="btn btn-primary mt-1">Chirp!</button>
                </div>
            </div>
        </div>
    )
}

export default Input;
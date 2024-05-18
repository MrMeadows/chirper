import React from 'react';

const Login = () => {
    return (
        <div className="container align-self-center" style={{maxWidth: "330px"}}>
            <div className="d-flex align-items-center vh-100">
                <div className="form-signin w-100 m-auto p-3 border border-2 rounded">
                    <form>
                        <h4>What is your name?</h4>
                        <div className="form-floating">
                            <input type="text" className="form-control my-3" id="floatingInput"></input>
                            <label for="floatingInput">Name</label>
                        </div>
                        <h6>Which house are you in?</h6>
                        <select className="form-select my-3">
                            <option selected value="1" id="hogwarts">Gryffindor</option>
                            <option value="2" id="slytherin">Slytherin</option>
                            <option value="3" id="ravenclaw">Ravenclaw</option>
                            <option value="4" id="hufflepuff">Hufflepuff</option>
                        </select>
                        <button class="btn btn-primary w-100 py-2" type="submit">Enter</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
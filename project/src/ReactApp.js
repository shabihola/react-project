import React, { useState } from 'react';
import './ReactApp.css';

const ReactApp = () => {
  const [details, setDetails] = useState({
    name: "Olamide",
    email: ""
  });

  const [name, setName] = useState("Olamide");
  const [email, setEmail] = useState("shabiolamide@gmail.com");
  console.log(name)
  console.log(email)

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setDetails( {...details, [name]: value})
  console.log(details)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
  };
    return(
        <div className="container">
            <header className="header">
                <h2>React Project</h2>
            </header>
            <form onSubmit={handleSubmit}>
              <label id="label-name">Name</label>
              <input type="text" id="input-name" name="name" value={name} placeholder="Enter your name here" required onChange={(e) => setName(e.target.value)}></input>

              <label id="label-email">Email</label>
              <input type="text" id="input-email" name="email" value={email}  placeholder="Enter your email address here" required onChange={(e) => setEmail(e.target.value)}></input>

              <button className="sign-in-btn">Sign in</button>
            </form>

        </div>
    )
}

export default ReactApp;

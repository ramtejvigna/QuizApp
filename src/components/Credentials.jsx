import React, { useState } from "react";
import './Credentials.css';

function Credentials() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
    console.log("User:", user);
    console.log("Password:", pass);
    setUser(""); setPass("");
  };

  return (
    <div className="container">
      <div className="wrapper bg-slate-600 p-10 rounded-xl glass flex flex-col items-center">
        <h2 className="text-4xl mb-7 text-white">Sign In</h2>
        <div className="input-wrapper">
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input
              type="text"
              name="user"
              placeholder="Username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="my-7 bg-white h-16 rounded-lg w-96 px-4 text-black"
            />
            <input
              type="password"
              name="pass"
              placeholder="Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="my-7 bg-white h-16 rounded-lg w-96 px-4 text-black"
            />
            <button type="submit" className="my-7 bg-blue-500 h-16 rounded-lg w-96 text-white text-xl">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Credentials;

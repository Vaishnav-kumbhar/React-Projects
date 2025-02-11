import React, { useState, useContext } from "react";
import UserContext from "../../context/UserContext";
import "./login.css";
function Login() {
  // sending data
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  // useContext
  const { setUser } = useContext(UserContext);
  // fn
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(username, password);
  };
  return (
    <div className="input-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />
      <input type="button" onClick={handleSubmit} value={"submit"} />
    </div>
  );
}

export default Login;

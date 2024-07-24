import { useState } from "react";
import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
function App() {
  return (
    <UserContextProvider>
      <h1>Getting and Setting Data Using Context Api</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;

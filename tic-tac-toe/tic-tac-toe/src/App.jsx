import { useState } from "react";
import { IconBase } from "react-icons/lib";
import Card from "./comp/Card/card";
import Grid from "./comp/Grid/Grid";
import "./App.css";

function App() {
  return (
    <>
      <Grid numberOfCards={9}></Grid>
    </>
  );
}

export default App;

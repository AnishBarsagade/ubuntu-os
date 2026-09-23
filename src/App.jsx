import React, { useState } from "react";
import "./app.scss";
import Dock from "./components/Dock";
import Nav from "./components/Nav";
import Github from "./components/windows/Github";
const App = () => {
  return (
    <>
      <main>
        <Nav />
        <Dock />
        <Github />
      </main>
    </>
  );
};

export default App;

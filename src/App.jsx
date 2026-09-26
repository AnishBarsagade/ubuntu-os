import React, { useState } from "react";
import "./app.scss";
import Dock from "./components/Dock";
import Nav from "./components/Nav";
import Github from "./components/windows/Github";
import Note from "./components/windows/Note";
import Resume from "./components/windows/Resume";
import Spotify from "./components/windows/Spotify";
import Cli from "./components/windows/Cli";
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";

const App = () => {
  // track the window open,minimized or maximize
  const [windowsState, setWindowsState] = useState({
    github: {
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
    },
    note: {
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
    },
    resume: {
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
    },
    spotify: {
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
    },
    cli: {
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
    },
  });
  return (
    <>
      <main>
        <Nav />
        <Dock windowsState={windowsState} setWindowsState={setWindowsState} />
        {windowsState.github.isOpen && !windowsState.github.isMinimized && (
          <Github
            windowName="github"
            windowsState={windowsState}
            setWindowsState={setWindowsState}
          />
        )}
        {windowsState.note.isOpen && !windowsState.note.isMinimized && (
          <Note
            windowName="note"
            windowsState={windowsState}
            setWindowsState={setWindowsState}
          />
        )}

        {windowsState.resume.isOpen && !windowsState.resume.isMinimized && (
          <Resume
            windowName="resume"
            windowsState={windowsState}
            setWindowsState={setWindowsState}
          />
        )}

        {windowsState.spotify.isOpen && !windowsState.spotify.isMinimized && (
          <Spotify
            windowName="spotify"
            windowsState={windowsState}
            setWindowsState={setWindowsState}
          />
        )}

        {windowsState.cli.isOpen && !windowsState.cli.isMinimized && (
          <Cli
            windowName="cli"
            windowsState={windowsState}
            setWindowsState={setWindowsState}
          />
        )}
      </main>
    </>
  );
};

export default App;

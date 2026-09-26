import React, { useEffect, useState } from "react";
import "./app.scss";
import Dock from "./components/Dock";
import Nav from "./components/Nav";
import Github from "./components/windows/Github";
import Note from "./components/windows/Note";
import Resume from "./components/windows/Resume";
import Spotify from "./components/windows/Spotify";
import Cli from "./components/windows/Cli";

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
  //now for shortcuts
  const [activeWindow, setActiveWindow] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const isCommand = e.metaKey || e.ctrlKey;

      // Don't trigger shortcuts while typing
      const tag = e.target.tagName.toLowerCase();

      if (tag === "input" || tag === "textarea" || e.target.isContentEditable) {
        return;
      }

      // ⌘ + K → CLI
      if (isCommand && e.shiftKey && e.key.toLowerCase() === "k") {
        e.preventDefault();

        setWindowsState((state) => ({
          ...state,
          cli: {
            ...state.cli,
            isOpen: true,
            isMinimized: false,
          },
        }));

        setActiveWindow("cli");
      }

      // ⌘ + G → GitHub
      if (isCommand && e.shiftKey && e.key.toLowerCase() === "g") {
        e.preventDefault();

        setWindowsState((state) => ({
          ...state,
          github: {
            ...state.github,
            isOpen: true,
            isMinimized: false,
          },
        }));

        setActiveWindow("github");
      }

      // ⌘ + M → Minimize
      if (isCommand && e.shiftKey && e.key.toLowerCase() === "m") {
        e.preventDefault();

        if (activeWindow) {
          setWindowsState((state) => ({
            ...state,
            [activeWindow]: {
              ...state[activeWindow],
              isMinimized: true,
            },
          }));
        }
      }

      // ⌘ + W → Close
      if (isCommand && e.key.toLowerCase() === "w") {
        e.preventDefault();

        if (activeWindow) {
          setWindowsState((state) => ({
            ...state,
            [activeWindow]: {
              ...state[activeWindow],
              isOpen: false,
            },
          }));

          setActiveWindow(null);
        }
      }

      // ⌘ + Shift + Enter → Maximize / Restore
      if (isCommand && e.shiftKey && e.key === "Enter") {
        e.preventDefault();

        if (activeWindow) {
          setWindowsState((state) => ({
            ...state,
            [activeWindow]: {
              ...state[activeWindow],
              isMaximized: !state[activeWindow].isMaximized,
            },
          }));
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeWindow]);
  return (
    <>
      <main>
        <Nav />
        <Dock
          windowsState={windowsState}
          setWindowsState={setWindowsState}
          setActiveWindow={setActiveWindow}
        />
        {windowsState.github.isOpen && !windowsState.github.isMinimized && (
          <Github
            windowName="github"
            windowsState={windowsState}
            setWindowsState={setWindowsState}
            activeWindow={activeWindow}
            setActiveWindow={setActiveWindow}
          />
        )}
        {windowsState.note.isOpen && !windowsState.note.isMinimized && (
          <Note
            windowName="note"
            windowsState={windowsState}
            setWindowsState={setWindowsState}
            activeWindow={activeWindow}
            setActiveWindow={setActiveWindow}
          />
        )}

        {windowsState.resume.isOpen && !windowsState.resume.isMinimized && (
          <Resume
            windowName="resume"
            windowsState={windowsState}
            setWindowsState={setWindowsState}
            activeWindow={activeWindow}
            setActiveWindow={setActiveWindow}
          />
        )}

        {windowsState.spotify.isOpen && !windowsState.spotify.isMinimized && (
          <Spotify
            windowName="spotify"
            windowsState={windowsState}
            setWindowsState={setWindowsState}
            activeWindow={activeWindow}
            setActiveWindow={setActiveWindow}
          />
        )}

        {windowsState.cli.isOpen && !windowsState.cli.isMinimized && (
          <Cli
            windowName="cli"
            windowsState={windowsState}
            setWindowsState={setWindowsState}
            activeWindow={activeWindow}
            setActiveWindow={setActiveWindow}
          />
        )}
      </main>
    </>
  );
};

export default App;

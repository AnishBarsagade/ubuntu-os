import React, { useRef, useState } from "react";
import { Rnd } from "react-rnd";
import "./window.scss";

const MacWindow = ({
  children,
  width = "60vw",
  height = "60vh",
  windowName,
  windowsState,
  setWindowsState,
}) => {
  const [windowSize, setWindowSize] = useState({
    width,
    height,
  });

  const [windowPosition, setWindowPosition] = useState({
    x: 300,
    y: 200,
  });

  const previousState = useRef({
    width,
    height,
    x: 300,
    y: 200,
  });

  const window = windowsState[windowName];

  // CLOSE
  const handleClose = () => {
    setWindowsState((state) => ({
      ...state,
      [windowName]: {
        ...state[windowName],
        isOpen: false,
      },
    }));
  };

  // MINIMIZE
  const handleMinimize = () => {
    setWindowsState((state) => ({
      ...state,
      [windowName]: {
        ...state[windowName],
        isMinimized: true,
      },
    }));
  };

  // MAXIMIZE / RESTORE
  const handleMaximize = () => {
    if (!window.isMaximized) {
      // Save current size + position
      previousState.current = {
        width: windowSize.width,
        height: windowSize.height,
        x: windowPosition.x,
        y: windowPosition.y,
      };

      // Maximize
      setWindowSize({
        width: "100vw",
        height: "100vh",
      });

      setWindowPosition({
        x: 0,
        y: 0,
      });

      setWindowsState((state) => ({
        ...state,
        [windowName]: {
          ...state[windowName],
          isMaximized: true,
        },
      }));
    } else {
      // Restore previous size
      setWindowSize({
        width: previousState.current.width,
        height: previousState.current.height,
      });

      // Restore previous position
      setWindowPosition({
        x: previousState.current.x,
        y: previousState.current.y,
      });

      setWindowsState((state) => ({
        ...state,
        [windowName]: {
          ...state[windowName],
          isMaximized: false,
        },
      }));
    }
  };

  return (
    <Rnd
      size={windowSize}
      position={windowPosition}
      dragHandleClassName="nav"
      // DRAG
      onDrag={(e, d) => {
        if (!window.isMaximized) {
          setWindowPosition({
            x: d.x,
            y: d.y,
          });
        }
      }}
      // RESIZE
      onResize={(e, direction, ref, delta, position) => {
        if (!window.isMaximized) {
          setWindowSize({
            width: ref.offsetWidth,
            height: ref.offsetHeight,
          });

          setWindowPosition({
            x: position.x,
            y: position.y,
          });
        }
      }}
      disableDragging={window.isMaximized}
      enableResizing={!window.isMaximized}
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            {/* RED */}
            <div onClick={handleClose} className="dot red"></div>

            {/* YELLOW */}
            <div onClick={handleMinimize} className="dot yellow"></div>

            {/* GREEN */}
            <div onClick={handleMaximize} className="dot green"></div>
          </div>

          <div className="title">
            <p>anishbarsagade -zsh</p>
          </div>
        </div>

        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;

import React from "react";
import MacWindow from "./MacWindow";
import "./resume.scss";
const Resume = ({
  windowName,
  windowsState,
  setWindowsState,
  activeWindow,
  setActiveWindow,
}) => {
  return (
    <MacWindow
      windowName={windowName}
      windowsState={windowsState}
      setWindowsState={setWindowsState}
      activeWindow={activeWindow}
      setActiveWindow={setActiveWindow}
    >
      <div className="resume-window">
        <iframe src="/resume.pdf"></iframe>
      </div>
    </MacWindow>
  );
};

export default Resume;

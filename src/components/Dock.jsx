import React from "react";
import "./dock.scss";

const Dock = ({ windowsState, setWindowsState }) => {
  return (
    <footer className="dock">
      {/* GitHub */}
      <div
        onClick={() => {
          setWindowsState((state) => ({
            ...state,
            github: {
              ...state.github,
              isOpen: true,
              isMinimized: false,
            },
          }));
        }}
        className="icon github"
      >
        <img src="/doc-icons/github.svg" alt="" />
      </div>

      {/* Notes */}
      <div
        onClick={() => {
          setWindowsState((state) => ({
            ...state,
            note: {
              ...state.note,
              isOpen: true,
              isMinimized: false,
            },
          }));
        }}
        className="icon note"
      >
        <img src="/doc-icons/note.svg" alt="" />
      </div>

      {/* Resume */}
      <div
        onClick={() => {
          setWindowsState((state) => ({
            ...state,
            resume: {
              ...state.resume,
              isOpen: true,
              isMinimized: false,
            },
          }));
        }}
        className="icon pdf"
      >
        <img src="/doc-icons/pdf.svg" alt="" />
      </div>

      {/* Calendar */}
      <div
        onClick={() => {
          window.open("https://calendar.google.com/", "_blank");
        }}
        className="icon calendar"
      >
        <img src="/doc-icons/calendar.svg" alt="" />
      </div>

      {/* Spotify */}
      <div
        onClick={() => {
          setWindowsState((state) => ({
            ...state,
            spotify: {
              ...state.spotify,
              isOpen: true,
              isMinimized: false,
            },
          }));
        }}
        className="icon spotify"
      >
        <img src="/doc-icons/spotify.svg" alt="" />
      </div>

      {/* Mail */}
      <div
        onClick={() => {
          window.location.href = "mailto:anish@example.com";
        }}
        className="icon mail"
      >
        <img src="/doc-icons/mail.svg" alt="" />
      </div>

      {/* LinkedIn */}
      <div
        onClick={() => {
          window.open("https://www.linkedin.com/in/anishbarsagade/", "_blank");
        }}
        className="icon link"
      >
        <img src="/doc-icons/link.svg" alt="" />
      </div>

      {/* Terminal */}
      <div
        onClick={() => {
          setWindowsState((state) => ({
            ...state,
            cli: {
              ...state.cli,
              isOpen: true,
              isMinimized: false,
            },
          }));
        }}
        className="icon cli"
      >
        <img src="/doc-icons/cli.svg" alt="" />
      </div>
    </footer>
  );
};

export default Dock;

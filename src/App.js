import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      </div>
      <footer className="footer">
        This project has been coded by Julia and is hosted on{" "}
        <a
          href="https://github.com/bee60990/weather_project"
          target="_blank"
          rel="noreferrer"
        >
          GitHubs
        </a>
      </footer>
    </div>
  );
}

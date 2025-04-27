import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <Weather city="New York" />
        <p>
          This page was coded by{" "}
          <a href="https://github.com/Lodeme101" target="blank">
            Lodemé Pendergraph
          </a>
          , opensourced on{" "}
          <a href="https://github.com/Lodeme101/weather-react" target="blank">
            Github
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://app.netlify.com/sites/weatherinreact/overview"
            target="blank"
          >
            Netlify
          </a>
        </p>
      </header>
      <footer></footer>
    </div>
  );
}

export default App;

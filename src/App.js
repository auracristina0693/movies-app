import React from "react";
import styles from "./App.module.css";
import { MoviesGrid } from "./Components/MoviesGrid/MoviesGrid";

function App() {
  return (
    <div className="App">
      <header>
        <h1 className={styles.title}>Movies App</h1>
      </header>
      <div>
        <MoviesGrid />
      </div>
    </div>
  );
}

export default App;

import React from "react";
import styles from "./App.module.css";
import { MovieDetails } from "./Components/MovieDetails/MovieDetails";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LandingPage } from "./Components/LandingPage/LandingPage";

function App() {
  return (
    <Router className="App">
      <header>
        <Link to="/">
          <h1 className={styles.title}>Movies</h1>
        </Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/movies/:movieId">
            <MovieDetails />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;

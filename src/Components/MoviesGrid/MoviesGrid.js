import React from "react";
import { MovieCard } from "../MovieCard/MovieCard";
import movies from "../../assets/movies.json";
import styles from "../MoviesGrid/MoviesGrid.module.css";

export const MoviesGrid = () => {
  return (
    <div>
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MoviesGrid;

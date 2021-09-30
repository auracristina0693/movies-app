import React from "react";
import styles from "../MovieCard/MovieCard.module.css";

export const MovieCard = ({ movie }) => {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <div>
      <li className={styles.movieCard}>
        <img
          width={230}
          height={345}
          className={styles.movieImage}
          src={imageUrl}
          alt={movie.title}
        />
        <div> {movie.title} </div>
      </li>
    </div>
  );
};
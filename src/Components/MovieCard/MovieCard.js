import React from "react";
import styles from "../MovieCard/MovieCard.module.css";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <div>
      <li className={styles.movieCard}>
        <Link to={"/movies/" + movie.id}>
          <img
            width={230}
            height={345}
            className={styles.movieImage}
            src={imageUrl}
            alt={movie.title}
          />
          <div> {movie.title} </div>
        </Link>
      </li>
    </div>
  );
};

export default MovieCard;

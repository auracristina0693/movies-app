import React from "react";
import styles from "../MovieCard/MovieCard.module.css";
import { Link } from "react-router-dom";
import { getMovieImg } from "../../utils/getMovieImg";

export const MovieCard = ({ movie }) => {
  const imageUrl = getMovieImg(movie.poster_path, 300);

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

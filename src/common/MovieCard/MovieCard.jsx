import React from 'react';
import Badge from 'react-bootstrap/Badge';
import './MovieCard.style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUsers } from '@fortawesome/free-solid-svg-icons';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';

const MovieCard = ({ movie }) => {
  const { data: genreData } = useMovieGenreQuery();
  console.log('genre', genreData);

  return (
    <div
      style={{
        backgroundImage: 'url(' + `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` + ')',
      }}
      className="movie-card"
    >
      <div className="overlay">
        <h1>{movie.title}</h1>
        {movie.genre_ids.map((id) => (
          <Badge bg="success">{id}</Badge>
        ))}
        <div>
          <div>
            <FontAwesomeIcon icon={faStar} />
            {movie.vote_average}
          </div>
          <div className="popularity">
            <FontAwesomeIcon icon={faUsers} />
            {movie.popularity}
          </div>
          <div>{movie.adult ? 'over18' : ''}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

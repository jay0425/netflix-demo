import React from 'react';
import Badge from 'react-bootstrap/Badge';
import './MovieCard.style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUsers } from '@fortawesome/free-solid-svg-icons';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const goToDetailPage = (id) => {
    navigate(`/movies/${id}`);
  };

  const { data: genreData } = useMovieGenreQuery();
  console.log('genre', genreData);

  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const genreNameList = genreIdList?.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });
    return genreNameList;
  };

  return (
    <div
      style={{
        backgroundImage: 'url(' + `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` + ')',
      }}
      className="movie-card"
      onClick={() => goToDetailPage(movie.id)}
    >
      <div className="overlay">
        <h1>{movie.title}</h1>
        {showGenre(movie.genre_ids)?.map((id) => (
          <Badge className="me-2" bg="success">
            {id}
          </Badge>
        ))}
        <div className="movie-info">
          <div>
            <FontAwesomeIcon className="me-1" icon={faStar} />
            {Math.round(movie.vote_average * 10) / 10}
          </div>
          <div className="popularity">
            <FontAwesomeIcon className="me-1" icon={faUsers} />
            {movie.popularity}
          </div>
          <div className="age-icon">{movie.adult ? '18' : 'All'}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

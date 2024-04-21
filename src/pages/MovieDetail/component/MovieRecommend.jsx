import React from 'react';
import { Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import MovieCard from '../../../common/MovieCard/MovieCard';
import './MovieRecommend.style.css';
import Loading from '../../../common/Loading/Loading';
import { useRecommendMoviesQuery } from '../../../hooks/useRecommendMovies';

export default function MovieRecommend() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useRecommendMoviesQuery({
    id,
  });
  console.log(data);
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div className="movie-recommendation">
      <h2>연관된 추천 영화</h2>
      <div className="recommendation">
        {data?.map((recommendation, index) => (
          <MovieCard
            key={index}
            movie={{
              id: recommendation.id,
              title: recommendation.title,
              poster_path: recommendation.poster_path,
              vote_average: recommendation.vote_average,
              popularity: recommendation.popularity,
              adult: recommendation.adult,
              genre_ids: recommendation.genre_ids,
            }}
          />
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import { Alert } from 'react-bootstrap';
import Loading from '../../../../common/Loading/Loading';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';

const PopularMovieSlide = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <MovieSlider title="인기 영화" movies={data.results} responsive={responsive} />
    </div>
  );
};

export default PopularMovieSlide;

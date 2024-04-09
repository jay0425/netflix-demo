import React from 'react';
import { useRatedMoviesQuery } from '../../../../hooks/useRatedMovies';
import Loading from '../../../../common/Loading/Loading';
import { Alert } from 'react-bootstrap';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';

const RatedMovieSlide = () => {
  const { data, isLoading, isError, error } = useRatedMoviesQuery();

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div>
      <MovieSlider title="상위권 영화" movies={data.results} responsive={responsive} />
    </div>
  );
};

export default RatedMovieSlide;

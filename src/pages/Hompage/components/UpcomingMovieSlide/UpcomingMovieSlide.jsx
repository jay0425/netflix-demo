import React from 'react';
import Loading from '../../../../common/Loading/Loading';
import { Alert } from 'react-bootstrap';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { useUpcomingMoviesQuery } from '../../../../hooks/useUpcomingMovies';
import { responsive } from '../../../../constants/responsive';

const UpcomingMovieSlide = () => {
  const { data, isLoading, isError, error } = useUpcomingMoviesQuery();

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <MovieSlider title="Upcoming Movies" movies={data.results} responsive={responsive} />
    </div>
  );
};

export default UpcomingMovieSlide;

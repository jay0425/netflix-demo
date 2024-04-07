import React from 'react';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Alert } from 'react-bootstrap';
import MovieCard from '../MovieCard/MovieCard';
import Loading from '../Loading/Loading';
import './PopularMovieSlide.style.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const PopularMovieSlide = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Alert varient="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <h3 className="about-movie">Popular Movies</h3>
      <Carousel
        infinite={true}
        centerMode={true}
        itemClass="movie-slider p-1"
        containerClass="carousel-container"
        responsive={responsive}
      >
        {data.results.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default PopularMovieSlide;

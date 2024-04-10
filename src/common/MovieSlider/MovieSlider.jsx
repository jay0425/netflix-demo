import React from 'react';
import './MovieSlider.style.css';
import MovieCard from '../MovieCard/MovieCard';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const MovieSlider = ({ title, movies, responsive }) => {
  return (
    <div>
      <h3 className="about-movie">{title}</h3>
      <Carousel
        infinite={true}
        centerMode={true}
        itemClass="movie-slider p-1"
        containerClass="carousel-container"
        responsive={responsive}
        className="carousel"
      >
        {movies?.map((movie, index) => (
          <MovieCard className="movie-card" movie={movie} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlider;

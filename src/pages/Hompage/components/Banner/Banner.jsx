import React from 'react';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import Alert from 'react-bootstrap/Alert';
import './Banner.style.css';
import Loading from '../../../../common/Loading/Loading';
import Container from 'react-bootstrap/Container';

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  console.log('ddd', data);
  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    // <div
    //   style={{
    //     backgroundImage:
    //       'url(' + `https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${data?.results[0].backdrop_path}` + ')',
    //   }}
    //   className="banner"
    // >

    <div
      style={{
        backgroundImage: 'url(' + `https://image.tmdb.org/t/p/original${data?.results[0].backdrop_path}` + ')',
      }}
      className="banner"
    >
      <div className="banner-text-area">
        <h1>{data && data.results[0].title}</h1>
        <h5>{data?.results[0].overview}</h5>
      </div>
    </div>
  );
};

export default Banner;

import React, { useState } from 'react';
import { Alert, Badge, Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDetailMoviesQuery } from '../../hooks/useDeatilMovies';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImdb } from '@fortawesome/free-brands-svg-icons';
import { faPlay, faUsers } from '@fortawesome/free-solid-svg-icons';
import './MovieDetailPage.style.css';
import MovieReview from './component/MovieReview.jsx';
import MovieRecommend from './component/MovieRecommend.jsx';

const MovieDetailPage = () => {
  let { id } = useParams();

  const { data, isLoading, isError, error } = useDetailMoviesQuery(id);
  if (isLoading) {
    return <isLoading />;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <img
              className="movie-poster"
              src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
              alt="포스터 이미지"
            />
          </Col>
          <Col>
            {data.tagline && <h4 className="tagline">{data.tagline}</h4>}
            <h1>{data?.title}</h1>
            {data?.genres.map((genre, index) => (
              <Badge key={index} bg="success me-2">
                {genre.name}
              </Badge>
            ))}
            <div>
              <h5 className="py-3">{data.overview}</h5>
            </div>
            <div className="movie-info text-muted">
              <div className="me-3">개봉일 : {data?.release_date}</div>
              <div className="me-3">상영시간 : {data?.runtime}분</div>
              <div className="me-3">평점 : {data?.vote_average.toFixed(1)}</div>
              <div className="me-3">관객수 : {data?.popularity * 1000} 명</div>
              <div className="me-3">제작비 : {data.budget > 0 && data.budget.toLocaleString('ko-KR')}$</div>
              <div className="p-0 m-0">
                {data.adult ? <div className="bg-danger rounded-circle adult-style">18</div> : <div>전체 연령가</div>}
              </div>
            </div>
          </Col>
        </Row>

        <Row className="movie-reviews">
          <MovieReview />
        </Row>
        <Row>
          <MovieRecommend />
        </Row>
      </Container>
    </div>
  );
};

export default MovieDetailPage;

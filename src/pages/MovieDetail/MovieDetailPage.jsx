import React from 'react';
import { Alert, Badge, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDetailMovies } from '../../hooks/useDeatilMovies';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImdb } from '@fortawesome/free-brands-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

const MovieDetailPage = () => {
  let { id } = useParams();

  const { data, isLoading, isError, error } = useDetailMovies(id);
  console.log(data);
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
              src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
              alt="포스터 이미지"
              className="w-100"
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
            <div className="d-flex align-items-center text-muted">
              <div className="me-4">평점 {data?.vote_average.toFixed(1)}</div>
              <div className="me-4">관객수 {data?.popularity}</div>
              <div className="me-4">제작비 {data.budget > 0 && data.budget.toLocaleString('ko-KR')}</div>
              <div className="p-0 m-0">
                {data.adult ? <div className="bg-danger rounded-circle adult-style">18</div> : <div>전체 연령가</div>}
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>영화 리뷰</Col>
        </Row>
        <Row>
          <Col>관련 영화 추천</Col>
        </Row>
      </Container>
    </div>
  );
};

export default MovieDetailPage;

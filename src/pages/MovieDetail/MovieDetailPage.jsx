import React from 'react';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDetailMovies } from '../../hooks/useDeatilMovies';

const MovieDetailPage = () => {
  let { id } = useParams();

  const { data, isLoading, isError, error } = useDetailMovies(id);

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
              src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${data?.poster_path}`}
              alt="poster"
              className="w-100"
            />
          </Col>
          <Col>
            <h1 className="py-2">{data?.title}</h1>
            <div>영화 정보</div>
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

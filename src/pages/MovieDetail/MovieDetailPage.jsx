import React from 'react';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDetailMovies } from '../../hooks/useDeatilMovies';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImdb } from '@fortawesome/free-brands-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

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
            <img src={`https://image.tmdb.org/t/p/original${data?.poster_path}`} alt="poster" className="w-100" />
          </Col>
          <Col>
            <h1>{data?.title}</h1>
            <div className="d-flex align-items-center">
              <h3 className="me-4">
                <FontAwesomeIcon icon={faImdb} className="me-2" />
                {data?.vote_average}
              </h3>
              <h3 className="me-4">
                <FontAwesomeIcon icon={faUsers} className="me-2 text-warning" />
                {data?.popularity}
              </h3>
              <div className="p-0 m-0">
                {data.adult ? (
                  <div className="bg-danger rounded-circle adult-style">18</div>
                ) : (
                  <div className="bg-warning rounded-circle text-black adult-style">ALL</div>
                )}
              </div>
            </div>
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

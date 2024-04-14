import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSearchMovieQuery } from '../../hooks/useSearchMovie';
import Alert from 'react-bootstrap/Alert';
import Loading from '../../common/Loading/Loading';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MovieCard from '../../common/MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';
import { Badge } from 'react-bootstrap';

/*

- 경로 2가지
nav바에서 클릭해서 온경우 => popularMovie 보여주기
keyword를 입력해서 온경우 => keyword와 관련된 영화들을 보여줌


- 페이지네이션 설치
page state 만들기
페이지네이션 클릭할 때마다 page 바꿔주기
page 값이 바뀔때마다 useSearchMovie에 page까지 넣어서 fetch

*/

const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const keyword = query.get('q');
  const [data, setData] = useState(null);
  const [genre, setGenre] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  const { data: searchData, isLoading, isError, error } = useSearchMovieQuery({ keyword, page });
  const { data: genreData } = useMovieGenreQuery();

  const filterMovieByGenre = () => {
    const filteredData = data.results.filter((movie) => {
      return movie.genre_ids.includes(genre.id);
    });
    setData({ ...data, results: filteredData });
  };

  useEffect(() => {
    if (searchData) {
      setData(searchData);
    }
  }, [searchData]);

  useEffect(() => {
    setFilteredData(data?.results);
  }, [data]);
  console.log(data);

  useEffect(() => {
    if (genre) {
      filterMovieByGenre();
    }
  }, [genre]);

  const genreFilter = (item) => {
    const filteredMovies = data.results?.filter((movie) => movie.genre_ids.includes(item.id));
    setFilteredData(filteredMovies);
  };

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };
  console.log('MoviePage data', data);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div className="text-white">
      <Container>
        <Row>
          <Col lg={4} xs={12}>
            <div>
              <div className="genre-list">
                {genreData?.map((item) => (
                  <Badge bg="success me-2" key={item.id} onClick={() => genreFilter(item)}>
                    {item.name}
                  </Badge>
                ))}
              </div>
            </div>
          </Col>
          <Col lg={8} xs={12}>
            <Row>
              {filteredData?.map((movie, index) => (
                <Col key={index} lg={4} xs={12}>
                  <MovieCard movie={movie} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <ReactPaginate
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={data?.total_pages}
          previousLabel="<"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
          forcePage={page - 1}
        />
      </Container>
    </div>
  );
};

export default MoviePage;

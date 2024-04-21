import React from 'react';
import { useParams } from 'react-router-dom';
import { useMovieReviewsQuery } from '../../../hooks/useMovieReviews';
import './MovieReview.style.css';
import { Alert } from 'react-bootstrap';
import Loading from '../../../common/Loading/Loading';

const MovieReview = () => {
  const { id } = useParams();
  const { data: reviews, isLoading, isError, error } = useMovieReviewsQuery({ id });

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <h2>리뷰</h2>
      <div className="review-box">
        {reviews?.map((review, index) => (
          <div className="review" key={index}>
            <div className="review-author">{review?.author}</div>
            <div className="review-update">{review?.updated_at.substr(0, 10)}</div>
            <div>{review?.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieReview;

import React from 'react';
import Banner from './components/Banner/Banner';
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide';
import RatedMovieSlide from './components/RatedMovieSlide/RatedMovieSlide';
import UpcomingMovieSlide from './components/UpcomingMovieSlide/UpcomingMovieSlide';

/*

1. 배너 -> popular movie의 첫번째 아이템
2. popular movie
3. top rated movie
4. upcoming movie

5. tv 시리즈
*/

const Homepage = () => {
  return (
    <div className="text-white">
      <Banner />
      <PopularMovieSlide />
      <RatedMovieSlide />
      <UpcomingMovieSlide />
    </div>
  );
};

export default Homepage;

import React from 'react';
import Banner from './components/Banner/Banner';

/*

1. 배너 -> popular movie의 첫번째 아이템
2. popular movie
3. top rated movie
4. upcoming movie

*/

const Homepage = () => {
  return (
    <div className="text-white">
      <Banner />
    </div>
  );
};

export default Homepage;

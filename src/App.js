import './App.css';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Homepage from './pages/Hompage/Homepage';
import MoviePage from './pages/Movies/MoviePage';
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import 'bootstrap/dist/css/bootstrap.min.css';

/*

홈페이지 /
영화 전체를 보여주는 페이지 (서치) /movies
영화 디테일 페이지 /movies/:id

*/
function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        {/* user 화면 */}
        <Route index element={<Homepage />} />

        {/* 영화 관련 라우트들 묶어주기 */}
        <Route path="movies">
          <Route index element={<MoviePage />} />
          <Route path=":id" element={<MovieDetailPage />} />
        </Route>
        {/* <Route path="/movies" element={<MoviePage />} />
        <Route path="/movies/:id" element={<MovieDetailPage />} /> */}

        {/* tv 관련 라우트들 묶어주기 */}
        <Route path="tv">
          <Route index />
        </Route>

        {/* 그밖의 not found page */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;

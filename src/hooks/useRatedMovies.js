import api from '../utils/api';
import { useQuery } from '@tanstack/react-query';

const fetchRatedMovies = () => {
  return api.get(`/movie/top_rated?language=en-US&page=1`);
};

export const useRatedMoviesQuery = () => {
  return useQuery({
    queryKey: ['movie-rated'],
    queryFn: fetchRatedMovies,
    select: (result) => result.data,
  });
};

import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchMovies = (item) => {
  return api.get(`/movie/${item}?language=ko`);
};

export const useDetailMoviesQuery = (id) => {
  return useQuery({
    queryKey: ['movie-details', id],
    queryFn: () => fetchMovies(id),
    select: (result) => result.data,
  });
};

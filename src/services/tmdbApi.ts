const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const fetchMovies = async (query: string): Promise<Movie[]> => {
  if (!query) return [];
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  const data = await res.json();
  return data.results || [];
};

const fetchTrending = async (): Promise<Movie[]> => {
  const res = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results || [];
};

const fetchPopular = async (): Promise<Movie[]> => {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results || [];
};

export { fetchMovies, fetchPopular, fetchTrending };

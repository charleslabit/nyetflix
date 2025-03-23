const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
}

const fetchMovies = async (
  query: string,
  page: number = 1
): Promise<MovieResponse> => {
  const res = await fetch(
    `${BASE_URL}/search/movie?query=${query}&page=${page}&api_key=${API_KEY}`
  );
  if (!res.ok) throw new Error("Failed to fetch movies");
  return res.json();
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

const fetchTopRated = async (): Promise<Movie[]> => {
  const res = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results || [];
};

const fetchUpcoming = async (): Promise<Movie[]> => {
  const res = await fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results || [];
};

const fetchNowPlaying = async (): Promise<Movie[]> => {
  const res = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results || [];
};

const fetchDiscover = async (): Promise<Movie[]> => {
  const res = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results || [];
};

export {
  fetchDiscover,
  fetchMovies,
  fetchNowPlaying,
  fetchPopular,
  fetchTopRated,
  fetchTrending,
  fetchUpcoming,
};

import {
  fetchDiscover,
  fetchNowPlaying,
  fetchPopular,
  fetchTrending,
  fetchUpcoming,
  Movie,
} from "@/services/tmdbApi";
import { useQuery } from "@tanstack/react-query";

const CATEGORIES = [
  { key: "trending", title: "Trending Movies", fetchFn: fetchTrending },
  { key: "popular", title: "Most Popular", fetchFn: fetchPopular },
  { key: "upcoming", title: "Upcoming", fetchFn: fetchUpcoming },
  { key: "now_playing", title: "Now Playing", fetchFn: fetchNowPlaying },
  { key: "discover", title: "Discover", fetchFn: fetchDiscover },
];

export const useMovieCategories = () => {
  return CATEGORIES.map(({ key, title, fetchFn }) => {
    const query = useQuery<Movie[]>({
      queryKey: [key], // Using predefined keys
      queryFn: fetchFn,
    });
    return { title, ...query }; // Returns { title, data, isLoading, error, etc. }
  });
};

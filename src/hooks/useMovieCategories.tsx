import {
  fetchDiscover,
  fetchNowPlaying,
  fetchPopular,
  fetchTrending,
  fetchUpcoming,
  Movie,
} from "@/services/tmdbApi";
import { useQuery } from "@tanstack/react-query";

export const useMovieCategories = () => {
  const trending = useQuery<Movie[]>({
    queryKey: ["trending"],
    queryFn: fetchTrending,
  });

  const popular = useQuery<Movie[]>({
    queryKey: ["popular"],
    queryFn: fetchPopular,
  });

  const upcoming = useQuery<Movie[]>({
    queryKey: ["upcoming"],
    queryFn: fetchUpcoming,
  });

  const nowPlaying = useQuery<Movie[]>({
    queryKey: ["nowPlaying"],
    queryFn: fetchNowPlaying,
  });

  const discover = useQuery<Movie[]>({
    queryKey: ["discover"],
    queryFn: fetchDiscover,
  });

  return { trending, popular, upcoming, nowPlaying, discover };
};

"use client";
import { Loader } from "@/components/Loader";
import { MovieGrid } from "@/components/MovieGrid";
import { SearchBar } from "@/components/SearchBar";
import {
  fetchMovies,
  fetchPopular,
  fetchTrending,
  Movie,
} from "@/services/tmdbApi";
import { Container, Stack, Title } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";

export const Home = () => {
  const [query, setQuery] = useState<string>("");

  const searchQueryKey = useMemo(() => ["search", query], [query]);

  const { data: movies = [], isLoading: isLoadingMovies } = useQuery<Movie[]>({
    queryKey: searchQueryKey,
    queryFn: () => fetchMovies(query),
    enabled: !!query, // Automatically fetch when query is non-empty
  });

  const { data: trending = [], isLoading: isLoadingTrending } = useQuery<
    Movie[]
  >({
    queryKey: ["trending"],
    queryFn: fetchTrending,
  });

  const { data: popular = [], isLoading: isLoadingPopular } = useQuery<Movie[]>(
    {
      queryKey: ["popular"],
      queryFn: fetchPopular,
    }
  );

  return (
    <Container>
      <Title order={1} ta="center" mt="md">
        Nyetflix
      </Title>

      <SearchBar onSearch={setQuery} />
      <Stack gap={50}>
        {isLoadingMovies ? (
          <Loader />
        ) : (
          <MovieGrid title="Search Results" movies={movies} />
        )}
        {isLoadingTrending ? (
          <Loader />
        ) : (
          <MovieGrid title="Trending Movies" movies={trending} />
        )}
        {isLoadingPopular ? (
          <Loader />
        ) : (
          <MovieGrid title="Most Watched (Popular)" movies={popular} />
        )}
      </Stack>
    </Container>
  );
};

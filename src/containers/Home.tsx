"use client";
import { Loader } from "@/components/Loader";
import { MovieCarousel } from "@/components/MovieCarousel";
import { MovieGrid } from "@/components/MovieGrid";
import { SearchBar } from "@/components/SearchBar";
import { useMovieCategories } from "@/hooks/useMovieCategories";
import { fetchMovies } from "@/services/tmdbApi";
import { Container, Stack, Title } from "@mantine/core";
import { useIntersection } from "@mantine/hooks";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";

export const Home = () => {
  const [query, setQuery] = useState<string>("");
  const categoryQueries = useMovieCategories();

  const loadMoreRef = useRef(null);
  const { ref, entry } = useIntersection({
    root: loadMoreRef.current,
    threshold: 1, // Triggers when fully in view
  });

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading: isLoadingMovies,
  } = useInfiniteQuery({
    queryKey: ["search", query],
    queryFn: async ({ pageParam = 1 }) => fetchMovies(query, pageParam), // Make sure fetchMovies supports `pageParam`
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
    enabled: !!query,
    initialPageParam: 1, // Ensures proper pagination start
  });
  // Flatten pages into a single movie list
  const movies = data?.pages?.flatMap((page) => page?.results ?? []) || [];

  useEffect(() => {
    if (entry?.isIntersecting && hasNextPage) {
      fetchNextPage();
    }
  }, [entry, hasNextPage, fetchNextPage]);

  return (
    <Container>
      <Title order={1} ta="center" mt="md">
        Nyetflix
      </Title>
      <Stack gap={25}>
        <SearchBar onSearch={setQuery} />
        {query && (
          <MovieGrid
            title="Search Results"
            movies={movies}
            isLoading={isLoadingMovies}
          />
        )}

        {/* Invisible trigger element for infinite scroll */}
        <div ref={ref} style={{ height: 10 }} />

        {isFetchingNextPage && <Loader />}

        {!query && (
          <>
            {categoryQueries.map(({ title, data: movies = [], isLoading }) => (
              <MovieCarousel
                key={title}
                title={title}
                movies={movies}
                isLoading={isLoading}
              />
            ))}
          </>
        )}
      </Stack>
    </Container>
  );
};

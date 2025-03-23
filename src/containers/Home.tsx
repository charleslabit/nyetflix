"use client";
import {
  Button,
  Card,
  Container,
  Grid,
  Image,
  TextInput,
  Title,
} from "@mantine/core";
import { useEffect, useState } from "react";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

export default function Home() {
  const [query, setQuery] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [trending, setTrending] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);

  useEffect(() => {
    fetchTrending();
    fetchPopular();
  }, []);

  const fetchTrending = async () => {
    const res = await fetch(
      `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
    );
    const data = await res.json();
    setTrending(data.results);
  };

  const fetchPopular = async () => {
    const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await res.json();
    setPopular(data.results);
  };

  const searchMovies = async () => {
    if (!query) return;
    const res = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );
    const data = await res.json();
    setMovies(data.results);
  };

  return (
    <Container>
      <Title order={1} ta="center" mt="md">
        Movie Explorer
      </Title>

      <Grid justify="center" align="center" mt="lg">
        <Grid.Col span={8}>
          <TextInput
            placeholder="Search for a movie..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <Button onClick={searchMovies}>Search</Button>
        </Grid.Col>
      </Grid>

      {movies.length > 0 && (
        <Title order={2} mt="xl">
          Search Results
        </Title>
      )}
      <Grid mt="md">
        {movies.map((movie) => (
          <Grid.Col key={movie.id} span={4}>
            <Card shadow="sm" padding="lg">
              <Card.Section>
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              </Card.Section>
              <Title order={3} mt="md">
                {movie.title}
              </Title>
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      <Title order={2} mt="xl">
        Trending Movies
      </Title>
      <Grid mt="md">
        {trending.map((movie) => (
          <Grid.Col key={movie.id} span={4}>
            <Card shadow="sm" padding="lg">
              <Card.Section>
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              </Card.Section>
              <Title order={3} mt="md">
                {movie.title}
              </Title>
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      <Title order={2} mt="xl">
        Most Watched (Popular)
      </Title>
      <Grid mt="md">
        {popular.map((movie) => (
          <Grid.Col key={movie.id} span={4}>
            <Card shadow="sm" padding="lg">
              <Card.Section>
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              </Card.Section>
              <Title order={3} mt="md">
                {movie.title}
              </Title>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}

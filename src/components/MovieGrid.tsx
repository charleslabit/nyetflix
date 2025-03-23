import { Movie } from "@/services/tmdbApi";
import { Grid, Title } from "@mantine/core";
import { MovieCard } from "./MovieCard";

interface MovieGridProps {
  title: string;
  movies: Movie[];
}

export const MovieGrid = ({ title, movies }: MovieGridProps) => (
  <>
    {movies.length > 0 && (
      <>
        <Title order={2} mt="xl">
          {title}
        </Title>
        <Grid mt="md">
          {movies.map((movie) => (
            <Grid.Col key={movie.id} span={4}>
              <MovieCard movie={movie} />
            </Grid.Col>
          ))}
        </Grid>
      </>
    )}
  </>
);

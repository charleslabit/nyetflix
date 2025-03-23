import { Movie } from "@/services/tmdbApi";
import { Grid, Title } from "@mantine/core";
import { Loader } from "./Loader";
import { MovieCard } from "./MovieCard";
import { NoResults } from "./NoResults";

interface MovieGridProps {
  title: string;
  movies: Movie[];
  isLoading?: boolean;
}

export const MovieGrid = ({ title, movies, isLoading }: MovieGridProps) => {
  if (isLoading) return <Loader />;
  if (!movies.length) return <NoResults />;
  return (
    <section>
      <Title order={2} mt="xl">
        {title}
      </Title>
      <Grid mt="md" gutter={30}>
        {movies.map((movie) => (
          <Grid.Col key={movie.id} span={{ md: 4, sm: 12 }}>
            <MovieCard movie={movie} />
          </Grid.Col>
        ))}
      </Grid>
    </section>
  );
};

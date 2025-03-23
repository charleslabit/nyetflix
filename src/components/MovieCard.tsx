import { Movie } from "@/services/tmdbApi";
import { Card, Image, Title } from "@mantine/core";

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => (
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
);

import { Movie } from "@/services/tmdbApi";
import { Card, Image, Overlay, Text, Title } from "@mantine/core";
import { useState } from "react";

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Card
      withBorder
      shadow="sm"
      padding="lg"
      h={500}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card.Section>
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          h={400}
          fit="cover"
          onError={(e) =>
            (e.currentTarget.src =
              "https://placehold.co/300x400?text=Broken%20Image")
          } // Handle broken image
        />
      </Card.Section>
      <Title order={3} mt="md" lineClamp={2}>
        {movie.title}
      </Title>
      <Overlay
        backgroundOpacity={0.7}
        p={10}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: isHovered ? 1 : 0,
        }}
      >
        <Text fz={14} c="white" lineClamp={20}>
          {movie?.overview || "No overview available"}
        </Text>
      </Overlay>
    </Card>
  );
};

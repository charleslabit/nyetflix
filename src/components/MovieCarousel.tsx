import { Movie } from "@/services/tmdbApi";
import { Carousel } from "@mantine/carousel";
import { Title } from "@mantine/core";
import {
  IconCircleChevronLeftFilled,
  IconCircleChevronRightFilled,
} from "@tabler/icons-react";
import { Loader } from "./Loader";
import { MovieCard } from "./MovieCard";
import classes from "./MovieCarousel.module.css";
import { NoResults } from "./NoResults";

interface MovieCarouselProps {
  title: string;
  movies: Movie[];
  isLoading?: boolean;
}

export const MovieCarousel = ({
  title,
  movies,
  isLoading,
}: MovieCarouselProps) => {
  if (isLoading) return <Loader />;
  if (!movies.length) return <NoResults />;

  return (
    <section>
      <Title order={2} mt="xl" tt="capitalize">
        {title}
      </Title>
      <Carousel
        className={classes.carousel}
        align="start"
        withIndicators
        loop
        draggable
        controlSize={40}
        dragFree
        classNames={{ control: classes.control }}
        slideSize={{ base: "100%", md: "25%" }}
        slideGap={{ base: 0, sm: "lg" }}
        nextControlIcon={
          <IconCircleChevronRightFilled size={40} color="white" />
        }
        previousControlIcon={
          <IconCircleChevronLeftFilled size={40} color="white" />
        }
      >
        {movies.map((movie) => (
          <Carousel.Slide key={movie.id}>
            <MovieCard movie={movie} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </section>
  );
};

import { Anchor, Center, Stack, Text } from "@mantine/core";
import Image from "next/image";

export const Footer = () => (
  <Center py="md">
    <Stack align="center" gap="xs">
      <Text size="sm" color="dimmed" ta="center">
        This product uses the TMDb API but is not endorsed or certified by TMDb.
      </Text>
      <Anchor
        href="https://www.themoviedb.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/default/tmdb-logo.svg"
          alt="TMDb Logo"
          width={100}
          height={50}
        />
      </Anchor>
    </Stack>
  </Center>
);

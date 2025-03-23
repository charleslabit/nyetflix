import { Center, Text } from "@mantine/core";

export const NoResults = () => {
  return (
    <Center mih={300}>
      <Text ta="center" mt="md" size="lg" c="dimmed">
        No movies found. Try searching for something else.
      </Text>
    </Center>
  );
};

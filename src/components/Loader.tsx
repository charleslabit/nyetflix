import { Flex, Loader as MLoader } from "@mantine/core";

export const Loader = () => {
  return (
    <Flex justify="center" align="center" h={450}>
      <MLoader size="lg" />
    </Flex>
  );
};

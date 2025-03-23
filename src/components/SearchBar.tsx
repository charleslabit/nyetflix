import { Button, Grid, TextInput } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebouncedValue(query, 300);

  return (
    <Grid justify="center" align="center" mt="lg">
      <Grid.Col span={8}>
        <TextInput
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <Button onClick={() => onSearch(debouncedQuery)}>Search</Button>
      </Grid.Col>
    </Grid>
  );
};

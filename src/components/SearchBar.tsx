import { Button, Grid, TextInput } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebouncedValue(query, 100);

  const handleSearch = () => {
    onSearch(debouncedQuery);
  };

  const handleEnterKey = () => {
    onSearch(query);
  };

  return (
    <Grid justify="center" align="center" mt="lg">
      <Grid.Col span={"auto"}>
        <TextInput
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleEnterKey()}
        />
      </Grid.Col>
      <Grid.Col span={"content"}>
        <Button onClick={handleSearch}>Search</Button>
      </Grid.Col>
    </Grid>
  );
};

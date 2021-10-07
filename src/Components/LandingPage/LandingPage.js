import React from "react";
import MoviesGrid from "../MoviesGrid/MoviesGrid";
import { Search } from "../Search/Search";
import { useQuery } from "../../Hooks/useQuery";
import { useDebounce } from "../../Hooks/useDebounce.js/useDebounce";

export const LandingPage = () => {
  const query = useQuery();
  const search = query.get("search");

  const debouncedSearch = useDebounce(search, 500);

  return (
    <div>
      <Search />
      <MoviesGrid key={debouncedSearch} search={debouncedSearch} />
    </div>
  );
};

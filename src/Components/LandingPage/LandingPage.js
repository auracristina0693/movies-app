import React from "react";
import MoviesGrid from "../MoviesGrid/MoviesGrid";
import { Search } from "../Search/Search";
import { useQuery } from "../../Hooks/useQuery";

export const LandingPage = () => {
  const query = useQuery();
  const search = query.get("search");
  return (
    <div>
      <Search />
      <MoviesGrid key={search} search={search} />
    </div>
  );
};

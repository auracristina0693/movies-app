import React from "react";
import MoviesGrid from "../MoviesGrid/MoviesGrid";
import { Search } from "../Search/Search";

export const LandingPage = () => {
  return (
    <div>
      <Search />
      <MoviesGrid />
    </div>
  );
};

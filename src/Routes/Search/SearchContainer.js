import React, { useState } from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "../../api";

export default () => {
  const [keyword, setKeyword] = useState();
  const [results, setResults] = useState({
    isLoading: true,
    movies: [],
    tvs: [],
  });

  const handleKeyword = (keyword) => {
    setKeyword(keyword);
  };

  const handleSubmit = () => {
    getResults();
  };

  const getResults = async () => {
    const [movies, moviesError] = moviesApi.search(keyword);
    const [tvs, tvsError] = tvApi.search(keyword);
    setResults({
      isLoading: false,
      movies,
      tvs,
    });
  };

  return (
    <SearchPresenter
      {...results}
      handleKeyword={handleKeyword}
      handleSubmit={handleSubmit}
    />
  );
};

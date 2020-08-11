import React, { useState, useEffect } from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "../../api";
import { useParams } from "react-router-dom";

export default () => {
  // const [keyword, setKeywords] = useState("");
  const { keywords } = useParams();
  const [results, setResults] = useState({
    isLoading: true,
    movies: [],
    tvs: [],
  });

  const getResults = async (keywords) => {
    const [movies, moviesError] = await moviesApi.search(keywords);
    const [tvs, tvsError] = await tvApi.search(keywords);
    setResults({
      isLoading: false,
      movies,
      tvs,
    });
  };

  useEffect(() => {
    getResults(keywords);
  }, [keywords]);

  return <SearchPresenter {...results} />;
};

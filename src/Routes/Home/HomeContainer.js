import React, { useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "../../api";

export default () => {
  const [movies, setMovies] = useState({
    isLoading: true,
    nowPlaying: [],
    nowPlayingError: null,
    upcoming: [],
    upcomingError: null,
    popular: [],
    popularError: null,
  });

  const getMovies = async () => {
    const [nowPlaying, nowPlayingError] = await moviesApi.nowPlaying();
    const [upcoming, upcomingError] = await moviesApi.upcoming();
    const [popular, popularError] = await moviesApi.popular();
    setMovies({
      isLoading: false,
      nowPlaying,
      nowPlayingError,
      upcoming,
      upcomingError,
      popular,
      popularError,
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    getMovies();
  }, []);

  return <HomePresenter {...movies} />;
};

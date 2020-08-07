import React, { useState, useEffect } from "react";
import TvPresenter from "./TvPresenter";
import { tvApi } from "../../api";

export default () => {
  const [tvs, setTvs] = useState({
    isLoading: true,
    topRated: [],
    topRatedError: null,
    popular: [],
    popularError: null,
    airingToday: [],
    airingTodayError: null,
  });

  const getTvs = async () => {
    const [topRated, topRatedError] = await tvApi.topRated();
    const [popular, popularError] = await tvApi.popular();
    const [airingToday, airingTodayError] = await tvApi.airingToday();
    setTvs({
      topRated,
      topRatedError,
      popular,
      popularError,
      airingToday,
      airingTodayError,
    });
  };
  useEffect(() => {
    getTvs();
  }, []);

  return <TvPresenter {...tvs} />;
};

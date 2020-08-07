import axios from "axios";

const API_KEY = "7d31bd4a0529147093291c0392cf54ec";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: API_KEY,
    language: "en-US",
  },
});

const callApi = async (path, params) => {
  try {
    const {
      data: { results },
    } = await api.get(path, params);
    return [results, null];
  } catch (e) {
    console.log(e);
    return [null, e];
  }
};

export const moviesApi = {
  nowPlaying: () => callApi("movie/now_playing"),
  upcoming: () => callApi("movie/upcoming"),
  popular: () => callApi("movie/popular"),
  movieDetail: (id) =>
    callApi(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    callApi("search/movie", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

export const tvApi = {
  topRated: () => callApi("tv/top_rated"),
  popular: () => callApi("tv/popular"),
  airingToday: () => callApi("tv/airing_today"),
  showDetail: (id) =>
    callApi(`tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    callApi("search/tv", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

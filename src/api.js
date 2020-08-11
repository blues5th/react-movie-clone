import axios from "axios";

const API_KEY = "7d31bd4a0529147093291c0392cf54ec";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: API_KEY,
    language: "en-US",
  },
});

const callApi = async (path, params) => {
  try {
    const {
      data: { results },
      data,
    } = await api.get(path, params);
    return [results || data, null];
  } catch (e) {
    console.log(e);
    return [null, e];
  }
};

export const moviesApi = {
  nowPlaying: () => callApi("/movie/now_playing"),
  upcoming: () => callApi("/movie/upcoming"),
  popular: () => callApi("/movie/popular"),
  search: (term) =>
    callApi("/search/movie", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

export const tvApi = {
  topRated: () => callApi("/tv/top_rated"),
  popular: () => callApi("/tv/popular"),
  airingToday: () => callApi("/tv/airing_today"),
  search: (term) =>
    callApi("/search/tv", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

export const getDetail = (path) =>
  callApi(path, {
    params: {
      append_to_response: "videos",
    },
  });

export const getSimiler = (path) => callApi(path + "/similar");

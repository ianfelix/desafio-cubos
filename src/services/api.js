import axios from 'axios';

export const getMovives = axios.create({
  baseURL: `https://api.themoviedb.org/3/search/movie?api_key=19045ad8ea5c0a959776ed6937a76eef&language=pt-BR&query=`,
});

export const getImages = axios.create({
  baseURL: `https://image.tmdb.org/t/p/w500/`,
});

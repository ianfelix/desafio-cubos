import axios from 'axios';

export async function movieApiList() {
  try {
    const response = await axios.get(
      '/`https://api.themoviedb.org/3/search/movie?api_key=19045ad8ea5c0a959776ed6937a76eef&&language=pt-BR&query=`',
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function imageApiList() {
  try {
    const response = await axios.get(`https://image.tmdb.org/t/p/w500`);
    return response;
  } catch (error) {
    console.error(error);
  }
}

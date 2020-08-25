import React from 'react';
import './styles/GlobalStyles.css';
import Header from './components/Header';
import Input from './components/Input';
import theMovieDb from './services/api';
import Main from './components/Main';

function App() {
  const [newMovie, setNewMovie] = React.useState('');
  const [data, setData] = React.useState([]);
  const [genres, setGenres] = React.useState([]);

  const handleChange = ({ target }) => {
    setNewMovie(target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setNewMovie('');
    setData([...data]);
  };

  React.useEffect(() => {
    theMovieDb.search.getMovie(
      { query: `${newMovie}&language=${theMovieDb.common.language}` },
      successCB,
      errorCB,
    );

    function successCB(movies) {
      movies = JSON.parse(movies);
      if (movies.results && movies.results.length > 0) {
        setData(movies.results);
      }
    }

    function errorCB(data) {
      console.log('Error callback: ' + data);
    }
  }, [newMovie]);

  React.useEffect(() => {
    theMovieDb.genres.getMovieList({ language: 'pt-BR' }, successCB, errorCB);

    function successCB(genre) {
      let categoria = JSON.parse(genre).genres;
      console.log(categoria);

      let genresObj = {};
      categoria.forEach((value, index, array) => {
        genresObj[value.id] = value.name;
      });

      setGenres(genresObj);
      console.log(genresObj);
    }

    function errorCB(data) {
      console.log('Error callback: ' + data);
    }
  }, []);

  if (data === undefined || genres === undefined) return null;
  return (
    <>
      <Header title='Movies' />

      <form onSubmit={handleSubmit}>
        <Input value={newMovie} onChange={handleChange} />
      </form>

      <Main dados={data} categorias={genres} />
    </>
  );
}

export default App;

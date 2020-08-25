import React from 'react';
import './styles/GlobalStyles.css';
import Header from './components/Header';
import Input from './components/Input';
import theMovieDb from './services/api';
import Main from './components/Main';

function App() {
  const [newMovie, setNewMovie] = React.useState('');
  const [data, setData] = React.useState([]);

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

  if (data === null) return null;
  return (
    <>
      <Header title='Movies' />

      <form onSubmit={handleSubmit}>
        <Input value={newMovie} onChange={handleChange} />
      </form>

      <Main dados={data} />
    </>
  );
}

export default App;

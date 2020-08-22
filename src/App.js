import React from 'react';
import './styles/GlobalStyles.css';
import Header from './components/Header';
import Input from './components/Input';
import { movieApiList, imageApiList } from './services/api';

function App() {
  const [newMovie, setNewMovie] = React.useState('');
  const [movies, setMovies] = React.useState([]);
  const [imagesApi, setImagesApi] = React.useState(null);

  const handleChange = ({ target }) => {
    setNewMovie(target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(movieApiList.results);
  };

  return (
    <>
      <Header title='Movies' />
      <section>
        <form onSubmit={handleSubmit}>
          <Input value={newMovie} onChange={handleChange} />
        </form>
      </section>
    </>
  );
}

export default App;

import React from 'react';
import './styles/GlobalStyles.css';
import Header from './components/Header';
import Input from './components/Input';
import { getMovives, getImages } from './services/api';
import Main from './components/Main';

function App() {
  const [newMovie, setNewMovie] = React.useState('');
  const [data, setData] = React.useState([]);
  const [img, setImg] = React.useState('');

  React.useEffect(() => {
    async function getDataMovies() {
      try {
        const response = await getMovives.get(newMovie);
        const dataMovie = await response.data.results;
        setData(dataMovie);
        console.log(data);
      } catch (error) {
        console.error(`Erro na requisição:${error}`);
      }
    }
    getDataMovies();
  }, [data, newMovie]);

  // React.useEffect(() => {
  //   async function getDataImages() {
  //     const response = await getImages.get(data[0].);
  //     const dataImg = await response.data;
  //     setImg(dataImg);
  //   }
  //   getDataImages();
  // }, [data]);

  const handleChange = ({ target }) => {
    setNewMovie(target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setNewMovie('');
    setData([]);
  };

  if (data === null) return null;
  return (
    <>
      <Header title='Movies' />

      <form onSubmit={handleSubmit}>
        <Input value={newMovie} onChange={handleChange} />
      </form>

      <Main title={data} />
    </>
  );
}

export default App;

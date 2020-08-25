import React from 'react';
import './styles.css';
import img from '../../assets/images/notfound.jpg';
import moment from 'moment';

const Main = ({ dados }) => {
  const nota = ['75%'];

  const categorias = ['Ação', 'Aventura', 'Fantasia'];

  return (
    <>
      {dados.map((movie) => (
        <section key={movie.id} className='grid-container'>
          <div className='container'>
            {movie.poster_path ? (
              <img
                src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
                alt=''
              />
            ) : (
              <img src={img} alt='Imagem não encontrada' />
            )}

            <a
              href={`https://www.themoviedb.org/movie/${movie.id}&language=pt-Br`}
              className='movie-name'
              target='_blank'
              rel='noopener noreferrer'>
              {movie.title}
            </a>
            <div className='rounded'>
              <span>
                {Math.min(movie.vote_average).toFixed(1).replace('.', '') + '%'}
              </span>
            </div>
            {movie.overview ? (
              <p className='description'>{movie.overview}</p>
            ) : (
              <p className='description'>Descrição não encontrada</p>
            )}

            <span className='data'>
              {moment(movie.release_date).format('DD/MM/YYYY')}
            </span>

            <ul className='categorias'>
              {categorias.map((categoria) => (
                <li key={categoria}>{categoria}</li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </>
  );
};

export default Main;

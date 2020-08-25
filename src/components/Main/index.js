import React from 'react';
import './styles.css';

const Main = ({ dados }) => {
  const nota = ['75%'];

  const categorias = ['Ação', 'Aventura', 'Fantasia'];

  const date = ['22/07/2020'];

  return (
    <>
      {dados.map((movie) => (
        <section key={movie.id} className='grid-container'>
          <div className='container'>
            <img
              src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
              alt='Imagem não encontrada'
            />
            <a
              href={`https://www.themoviedb.org/movie/${movie.id}&language=pt-Br`}
              className='movie-name'
              target='_blank'
              rel='noopener noreferrer'>
              {movie.title}
            </a>
            <div className='rounded'>
              <span>{nota}</span>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              rem a porro odit neque consectetur error quidem veritatis
              consequatur obcaecati cumque dolorum dignissimos cupiditate,
              repellat mollitia facilis quo ex aperiam.Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Laborum rem a porro odit neque
              consectetur error quidem veritatis consequatur obcaecati cumque
              dolorum dignissimos cupiditate, repellat mollitia facilis quo ex
              aperiam.
            </p>
            {date.map((date, index) => (
              <span key={index} className='data'>
                {date}
              </span>
            ))}

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

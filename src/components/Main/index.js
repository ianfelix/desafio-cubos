import React from 'react';
import './styles.css';
import img from './0.jpeg';

const Main = ({ dados }) => {
  const nome = [
    'Thor: Ragnarok',
    'Mulher Maravilha',
    'Como eu era antes de você',
    'Hello mundo',
    'Como vai você',
  ];

  const nota = ['75%'];

  const categorias = ['Ação', 'Aventura', 'Fantasia'];

  const date = ['22/07/2020'];

  return (
    <>
      {dados.map((nomeFilme) => (
        <section key={nomeFilme.id} className='grid-container'>
          <div className='container'>
            <img src={img} alt='' />
            <a href='/' className='movie-name'>
              {nomeFilme.title}
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

import React from 'react';
import './styles.css';

const Input = () => {
  return (
    <div className='input-search'>
      <input
        type='text'
        placeholder='Busque um filme por nome, ano ou gênero...'
      />
    </div>
  );
};

export default Input;
